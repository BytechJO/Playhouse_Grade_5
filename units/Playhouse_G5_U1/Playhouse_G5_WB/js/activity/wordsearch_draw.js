// ****************************************** //
// WordSearch - Version no: 7 (Per-Word Path Tracing + UX fixes)
// Date updated - August 16, 2026
//
// Key changes vs v6:
// 1) VALIDATION FIX: matches the "words" array in the data (one word at a
//    time, in order) instead of forcing the entire sentence to be traced
//    in a single unbroken drag. Each release of the mouse/finger checks the
//    just-drawn path against the NEXT expected word. Progress persists
//    across separate drags.
// 2) TOUCH FIX: touchmove now samples the actual DOM element under the
//    finger (elementFromPoint) and interpolates between the previous and
//    current touch point, so fast swipes no longer skip cells and break
//    the adjacency chain.
// 3) FILLER CELLS: a letter value of "*" now renders as an empty, non
//    selectable decorative cell instead of a literal asterisk.
// 4) UX FEEDBACK: correct word -> brief green flash + permanent strike/
//    highlight + word list updates. Wrong attempt -> brief red "shake"
//    flash, then the temporary path clears so the student can retry
//    without losing already-found words.
// 5) VISUAL CONNECTOR: each selected cell gets a data-dir attribute so a
//    CSS pseudo-element can draw a short connecting line to the previous
//    cell (see wordsearch_ux.css), similar to the pencil-line look in the
//    printed book.
// ****************************************** //

window.WordSearch = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    var qData = (dataObj.questions)[0];

    this.settings = {
        'num_rows'      : qData.rows,
        'num_columns'   : qData.columns,
        'matrix_holder' : ob[0].querySelector('.wordmatrix'),
        'word_holder'   : ob[0].querySelector('.wordlist'),
        'letters'       : qData.letters,
        'sentence'      : qData.sentence,
        'words'         : (qData.words != undefined && qData.words != null) ? qData.words : null,
        'css_words'     : (ob[0].dataset.css_words != undefined && ob[0].dataset.css_words != null) ? ob[0].dataset.css_words : 'none',
        'data_obj'      : dataObj,
        'activity_area' : ob[0],
        'parent_holder' : obj[0]
    };

    this.orientationAdjust = 'yes';

    // Path tracking (per single stroke / drag)
    this.is_dragging = false;
    this.selected_path = [];
    this.last_touch_point = null;

    this.init(this.settings);
};

WordSearch.prototype = {

    init: function (ob) {
        ob._startSelect = false;
        ob.boxSize = 0;
        ob.matrixbuilt = 'no';
        ob.wordlistbuilt = 'no';
        ob.mobileView = 'no';
        ob._rectOb = {};
        (ob._rectOb).endX = 0;
        (ob._rectOb).endY = 0;
        ob.rightOffset = 0;
        ob.rLeft = 0;
        ob.rTop = 0;

        // ---- Build the ordered list of target words (per-word validation) ----
        ob.targetWords = this.buildTargetWords(ob);
        ob.foundFlags = ob.targetWords.map(function () { return false; });
        ob.foundPaths = ob.targetWords.map(function () { return null; }); // stores cell coords per found word, for redraw
        ob.foundCount = 0;
        ob.allCorrect = 0; // 0: not all found, 1: all words found

        this.buildWordList(ob);
        this.buildMatrix(ob);
        this.addSlideListeners(ob);

        this.ob = ob;

        // ---- New: stative-verb underline task (separate from the grid) ----
        this.buildStativeParagraph(ob);
    },

    // Cleans a word: keeps letters/numbers only, uppercase
    cleanWord: function (str) {
        if (str == null) return '';
        return (str.toString()).toUpperCase().replace(/[^A-Z0-9]/g, '');
    },

    // Builds the ordered array of target words (uppercase, cleaned).
    // Prefers the explicit "words" array from data (matches the visible
    // story text and lets us show per-word progress). Falls back to
    // splitting "sentence" if "words" isn't provided.
    buildTargetWords: function (ob) {
        var self = this;
        var out = [];
        if (ob.words && ob.words.length > 0) {
            ob.words.forEach(function (w) {
                var cleaned = self.cleanWord(w.text);
                if (cleaned.length > 0) out.push(cleaned);
            });
        } else if (ob.sentence) {
            (ob.sentence.split(/\s+/)).forEach(function (w) {
                var cleaned = self.cleanWord(w);
                if (cleaned.length > 0) out.push(cleaned);
            });
        }
        return out;
    },

    // ==========================================================
    // STATIVE VERBS UNDERLINE TASK
    // Fully separate from the grid-crossing task above: reads/writes its
    // own DOM (.paragraphHolder) and its own data (ob.words[i].stative).
    // Nothing above this block was changed to add it.
    // ==========================================================

    // Builds the clickable paragraph. Each word toggles "underlined" on
    // click; nothing is marked right/wrong until Check is pressed.
    buildStativeParagraph: function (ob) {
        var container = ob.activity_area.querySelector('.paragraphHolder');
        if (!container) return; // HTML not updated with the new container yet
        this.deleteChild(container);
        var self = this;
        var wrap = document.createElement('div');
        wrap.setAttribute('class', 'sv_paragraph');
        ob.targetWords.forEach(function (word, i) {
            var span = document.createElement('span');
            span.setAttribute('class', 'sv_word');
            span.setAttribute('data-word-index', i);
            span.textContent = (ob.words && ob.words[i]) ? ob.words[i].text : word;
            span.addEventListener('click', function () {
                span.classList.toggle('underlined');
                span.classList.remove('sv-correct', 'sv-wrong'); // clear old feedback on change
                document.getElementsByClassName('checkBtn')[0].classList.remove('disabled');
                document.getElementsByClassName('resetBtn')[0].classList.remove('disabled');
            });
            wrap.appendChild(span);
            wrap.appendChild(document.createTextNode(' '));
        });
        container.appendChild(wrap);
    },

    // Called from validate() (Check button). Compares each word's
    // underlined/not-underlined state against ob.words[i].stative.
    // Returns true only if every word matches.
    validateStativeVerbs: function (ob) {
        var container = ob.activity_area.querySelector('.paragraphHolder');
        if (!container) return true; // nothing to validate if the container isn't present
        var spans = container.querySelectorAll('.sv_word');
        var allCorrect = true;
        spans.forEach(function (span) {
            var i = parseInt(span.getAttribute('data-word-index'));
            var expected = !!(ob.words && ob.words[i] && ob.words[i].stative);
            var picked = span.classList.contains('underlined');
            span.classList.remove('sv-correct', 'sv-wrong');
            if (picked === expected) {
                if (picked) span.classList.add('sv-correct');
            } else {
                span.classList.add('sv-wrong');
                allCorrect = false;
            }
        });
        return allCorrect;
    },

    resetStativeVerbs: function (ob) {
        var container = ob.activity_area.querySelector('.paragraphHolder');
        if (!container) return;
        var spans = container.querySelectorAll('.sv_word');
        spans.forEach(function (span) {
            span.classList.remove('underlined', 'sv-correct', 'sv-wrong');
        });
    },

    screenPoseAdjustments: function () {
        var self = this;
        var ob = this.ob;
        var $options = $(ob.activity_area);
        var $parent = $(ob.parent_holder);
        ob.mobileView = 'no';
        $options.find('.wordmatrix_holder').css('height', $options.height() - 10);
        ob.rightOffset = $('.container').css('margin-left');
        if (typeof isMobile === 'function' && isMobile()) {
            ob.rightOffset = 0;
        }
        if (ob.wordlistbuilt == 'yes') {
            var availWidth = $options.find('.all_cont').innerWidth();
            if (availWidth < 900) {
                $options.find('.wordmatrix_holder').css('width', '100%');
                var tmpWid = $options.find('.wordmatrix_holder').innerWidth() / ob.num_columns;
                var tmpHt = parseInt($options.find('.wordmatrix_holder').innerHeight()) / ob.num_rows;
                ob.boxSize = (tmpWid <= tmpHt) ? tmpWid : tmpHt;
                ob.mobileView = 'yes';
                $options.find('.wordlist').addClass('onPop');
                self.showWordList(false);
                $parent.find('.wordlist_but').removeClass('d-none');
            } else {
                $options.find('.wordmatrix_holder').css('width', '50vw');
                var tmpWid2 = parseInt($options.find('.wordmatrix_holder').innerWidth()) / ob.num_columns;
                var tmpHt2 = parseInt($options.find('.wordmatrix_holder').innerHeight()) / ob.num_rows;
                ob.boxSize = (tmpWid2 <= tmpHt2) ? tmpWid2 : tmpHt2;
                ob.mobileView = 'no';
                $parent.find('.wordlist_but').addClass('d-none');
                $options.find('.wordlist').removeClass('onPop');
                self.showWordList(true);
            }
        }
        $parent.find('.wordlist_but').css('right', (parseInt(ob.rightOffset) + 10) + 'px');
        self.setSizes();
    },

    showWordList: function (bool) {
        var ob = this.ob;
        var $options = $(ob.activity_area);
        var $wordList = $options.find('.wordlist');
        if ($wordList.hasClass('onPop')) {
            if (!bool) {
                $options.find('.wordlist').removeClass('d-block').addClass('d-none');
            } else {
                $options.find('.wordlist').removeClass('d-none').addClass('d-block');
            }
        } else {
            $options.find('.wordlist').removeClass('d-none').addClass('d-block');
        }
    },

    // ---- FIX: "*" is a filler/decorative cell, not a literal character ----
    buildMatrix: function (ob) {
        this.deleteChild(ob.matrix_holder);
        var letArr = this.getletters(ob.letters);

        var divCorrect = document.createElement('div');
        divCorrect.setAttribute('class', 'corrHolder');
        (ob.matrix_holder).appendChild(divCorrect);

        var divRect = document.createElement('div');
        divRect.setAttribute('class', 'rect');
        (ob.matrix_holder).appendChild(divRect);

        for (var row = 0; row < ob.num_rows; row++) {
            var divEl = document.createElement('div');
            divEl.setAttribute('class', 'ws_row row_' + (row + 1));
            divEl.classList.add("d-flex");
            (ob.matrix_holder).appendChild(divEl);

            for (var col = 0; col < ob.num_columns; col++) {
                var letter = (letArr[row] && letArr[row][col] != undefined) ? letArr[row][col] : '';
                var isFiller = (letter === '*');

                var colEl = document.createElement('div');
                var t = document.createElement("p");
                colEl.setAttribute('class', 'ws_col col_' + (row + 1) + '_' + (col + 1) + (isFiller ? ' filler' : ' cell'));
                colEl.setAttribute('data-row', row + 1);
                colEl.setAttribute('data-col', col + 1);
                if (isFiller) {
                    // decorative only: not part of any word, not selectable
                    colEl.setAttribute('aria-hidden', 'true');
                } else {
                    colEl.appendChild(t);
                    t.innerHTML = letter;
                }
                divEl.appendChild(colEl);
            }
        }
        ob.matrixbuilt = 'yes';
    },

    setSizes: function () {
        var self = this;
        var ob = this.ob;
        var $options = $(ob.activity_area);
        var matrix = $(ob.matrix_holder);
        if (ob.matrixbuilt == 'yes') {
            $options.find('.ws_col').each(function () {
                $(this).css('width', ob.boxSize + 'px');
                $(this).css('height', ob.boxSize + 'px');
                $(this).find('p').css({ 'position': 'absolute', "top": "50%", "left": "50%", "margin-right": "-50%", "transform": "translate(-50%, -50%)" });
            });

            // Re-apply permanent highlight for ALL found words (not just the last one)
            self.applyAllPermanentHighlights(ob);

            var lastXBox = matrix.find('.col_1_' + ob.num_columns);
            var lastYBox = matrix.find('.col_' + ob.num_rows + '_' + ob.num_columns);
            (ob._rectOb).endX = lastXBox.position().left + lastXBox.innerWidth();
            (ob._rectOb).endY = lastYBox.position().top + lastYBox.innerHeight();

            var marginTopMatrix = Math.round(($options.find('.wordmatrix_holder').height() - $options.find('.wordmatrix').outerHeight()) / 2);
            var marginTopList = Math.round(($options.find('.wordmatrix_holder').height() - $options.find('.wordlist').outerHeight()) / 2);
            $options.find('.wordmatrix').css('margin-top', marginTopMatrix + 'px');
            if ($options.find('.wordlist').hasClass('onPop')) {
                $options.find('.wordlist').css('margin-top', 'auto');
            } else {
                $options.find('.wordlist').css('margin-top', marginTopList + 'px');
            }

            $options.find('.ws_col').each(function () {
                var cellCls = $(this).attr('class');
                var fCellClass = (cellCls).split(' ')[1];
                if (fCellClass == 'col_1_1') {
                    ob.rLeft = $(this).offset().left;
                    ob.rTop = $(this).offset().top;
                }
            });
        }
    },

    isAdjacent: function (newCell) {
        if (this.selected_path.length === 0) return false;
        var lastCell = this.selected_path[this.selected_path.length - 1];
        var dr = Math.abs(newCell.row - lastCell.row);
        var dc = Math.abs(newCell.col - lastCell.col);
        return (dr <= 1 && dc <= 1) && (dr > 0 || dc > 0);
    },

    isInPath: function (cell) {
        return this.selected_path.some(function (c) { return c.row === cell.row && c.col === cell.col; });
    },

    // Direction key from `from` -> `to`, used to draw a connecting line via CSS
    dirKey: function (from, to) {
        var dr = to.row - from.row;
        var dc = to.col - from.col;
        if (dr === -1 && dc === 0) return 'u';
        if (dr === 1 && dc === 0) return 'd';
        if (dr === 0 && dc === -1) return 'l';
        if (dr === 0 && dc === 1) return 'r';
        if (dr === -1 && dc === -1) return 'ul';
        if (dr === -1 && dc === 1) return 'ur';
        if (dr === 1 && dc === -1) return 'dl';
        if (dr === 1 && dc === 1) return 'dr';
        return '';
    },

    drawRect: function () {
        var self = this;
        var ob = this.ob;
        var cells = ob.matrix_holder.querySelectorAll('.cell');
        cells.forEach(function (cell) {
            cell.classList.remove('selected', 'start', 'end');
            cell.removeAttribute('data-dir');
        });

        if (this.selected_path.length === 0) return;

        this.selected_path.forEach(function (coord, index) {
            var cellSel = '.cell[data-row="' + coord.row + '"][data-col="' + coord.col + '"]';
            var cell = ob.matrix_holder.querySelector(cellSel);
            if (!cell) return;
            cell.classList.add('selected');
            if (index === 0) cell.classList.add('start');
            if (index === self.selected_path.length - 1) cell.classList.add('end');
            if (index > 0) {
                cell.setAttribute('data-dir', self.dirKey(self.selected_path[index - 1], coord));
            }
        });
    },

    addSlideListeners: function (ob) {
        var self = this;
        var matrix_holder = ob.matrix_holder;

        matrix_holder.addEventListener('mousedown', function (e) {
            var cell = e.target.closest('.cell');
            if (cell) {
                e.preventDefault();
                self.startPath(cell);
            }
        });

        matrix_holder.addEventListener('mousemove', function (e) {
            if (!self.is_dragging) return;
            var cell = e.target.closest('.cell');
            if (cell) self.cellMove(cell);
        });

        document.addEventListener('mouseup', function () {
            self.cellTouchEnd();
        });

        matrix_holder.addEventListener('touchstart', function (e) {
            var touch = e.touches[0];
            var cell = document.elementFromPoint(touch.clientX, touch.clientY);
            cell = cell ? cell.closest('.cell') : null;
            if (cell) {
                e.preventDefault();
                self.last_touch_point = { x: touch.clientX, y: touch.clientY };
                self.startPath(cell);
            }
        }, { passive: false });

        // ---- TOUCH FIX: sample the real element under the finger and
        // interpolate between points so fast swipes don't skip cells ----
        matrix_holder.addEventListener('touchmove', function (e) {
            if (!self.is_dragging) return;
            e.preventDefault();
            var touch = e.touches[0];
            var prev = self.last_touch_point || { x: touch.clientX, y: touch.clientY };
            var steps = Math.max(1, Math.ceil(Math.hypot(touch.clientX - prev.x, touch.clientY - prev.y) / (ob.boxSize * 0.5)));
            for (var s = 1; s <= steps; s++) {
                var ix = prev.x + (touch.clientX - prev.x) * (s / steps);
                var iy = prev.y + (touch.clientY - prev.y) * (s / steps);
                var el = document.elementFromPoint(ix, iy);
                var cell = el ? el.closest('.cell') : null;
                if (cell) self.cellMove(cell);
            }
            self.last_touch_point = { x: touch.clientX, y: touch.clientY };
        }, { passive: false });

        matrix_holder.addEventListener('touchend', function () {
            self.last_touch_point = null;
            self.cellTouchEnd();
        });
        matrix_holder.addEventListener('touchcancel', function () {
            self.last_touch_point = null;
            self.cellTouchEnd();
        });
    },

    startPath: function (cell) {
        this.is_dragging = true;
        this.selected_path = [];
        var coords = { row: parseInt(cell.dataset.row), col: parseInt(cell.dataset.col) };
        this.selected_path.push(coords);
        this.drawRect();
    },

    cellMove: function (cell) {
        if (!this.is_dragging || !cell) return;
        var newCellCoords = { row: parseInt(cell.dataset.row), col: parseInt(cell.dataset.col) };
        var pathLength = this.selected_path.length;
        if (pathLength === 0) return;

        var lastCell = this.selected_path[pathLength - 1];
        if (newCellCoords.row === lastCell.row && newCellCoords.col === lastCell.col) return;

        // Backtrack one step
        if (pathLength > 1) {
            var secondLastCell = this.selected_path[pathLength - 2];
            if (newCellCoords.row === secondLastCell.row && newCellCoords.col === secondLastCell.col) {
                this.selected_path.pop();
                this.drawRect();
                return;
            }
        }

        if (this.isAdjacent(newCellCoords) && !this.isInPath(newCellCoords)) {
            this.selected_path.push(newCellCoords);
            this.drawRect();
        }
    },

    cellTouchEnd: function () {
        if (this.is_dragging) {
            this.is_dragging = false;
            if (this.selected_path.length > 0) {
                this.validateWordAttempt(this.ob, this.selected_path);
            }
            this.selected_path = [];
            this.drawRect();
        }
    },

    // ---- BUG FIX: the global Check button (activities.js) calls
    // theActivity.validate() with NO arguments. That name used to be taken
    // by the per-stroke word check below (which needs the ob + path
    // arguments), so clicking Check was throwing on undefined. This is now
    // the actual Check-button entry point: it validates the stative-verb
    // underline task and reports overall completion. The grid/word task
    // itself is untouched — it still validates automatically after every
    // drag via validateWordAttempt(). ----
    validate: function () {
        var ob = this.ob;
        var svCorrect = this.validateStativeVerbs(ob);
        var gridCorrect = (ob.allCorrect === 1);
        var allCorrect = svCorrect && gridCorrect;
        if (typeof showFeedback === 'function') showFeedback(true, allCorrect);
    },

    // ---- VALIDATION FIX: check the drawn path against the NEXT expected
    // word (in order), not the whole sentence in one go. Progress persists
    // across separate drags. ----
    validateWordAttempt: function (ob, selected_coords) {
        if (ob.allCorrect === 1) return; // already fully solved
        var self = this;

        var nextIndex = ob.foundFlags.indexOf(false);
        if (nextIndex === -1) return; // nothing left to find

        var selectedWord = '';
        selected_coords.forEach(function (coord) {
            var cellSel = '.cell[data-row="' + coord.row + '"][data-col="' + coord.col + '"]';
            var cell = ob.matrix_holder.querySelector(cellSel);
            if (cell) selectedWord += cell.textContent;
        });
        selectedWord = selectedWord.toUpperCase();

        var expected = ob.targetWords[nextIndex];

        if (selectedWord === expected) {
            ob.foundFlags[nextIndex] = true;
            ob.foundPaths[nextIndex] = selected_coords.slice();
            ob.foundCount++;

            self.applyPermanentHighlight(ob, selected_coords);
            self.flashCells(selected_coords, 'correct-flash');
            self.updateWordList(ob);

            if (ob.foundCount === ob.targetWords.length) {
                ob.allCorrect = 1;
                if (typeof showFeedback === 'function') showFeedback(true, true);
            }
        } else {
            self.flashCells(selected_coords, 'wrong-flash');
        }
    },

    flashCells: function (coords, className) {
        var ob = this.ob;
        var cells = coords.map(function (coord) {
            var cellSel = '.cell[data-row="' + coord.row + '"][data-col="' + coord.col + '"]';
            return ob.matrix_holder.querySelector(cellSel);
        }).filter(Boolean);
        cells.forEach(function (c) { c.classList.add(className); });
        setTimeout(function () {
            cells.forEach(function (c) { c.classList.remove(className); });
        }, 450);
    },

    applyPermanentHighlight: function (ob, coords) {
        coords.forEach(function (coord) {
            var cellSel = '.cell[data-row="' + coord.row + '"][data-col="' + coord.col + '"]';
            var cell = ob.matrix_holder.querySelector(cellSel);
            if (cell) cell.classList.add('found');
        });
    },

    // Re-applies highlight for every word already found (used after a
    // rebuild/resize so progress is never visually lost)
    applyAllPermanentHighlights: function (ob) {
        var self = this;
        ob.foundPaths.forEach(function (coords) {
            if (coords) self.applyPermanentHighlight(ob, coords);
        });
    },

    // ---- UX: word list mirrors the story text; each found word gets a
    // strike-through so the student sees progress reflected in the story,
    // matching the "follow the story" instruction. ----
    buildWordList: function (ob) {
        this.deleteChild(ob.word_holder);
        var wrap = document.createElement('div');
        wrap.setAttribute('class', 'ws_story');
        ob.targetWords.forEach(function (word, i) {
            var span = document.createElement('span');
            span.setAttribute('class', 'ws_story_word');
            span.setAttribute('data-word-index', i);
            span.textContent = (ob.words && ob.words[i]) ? ob.words[i].text : word;
            wrap.appendChild(span);
            wrap.appendChild(document.createTextNode(' '));
        });
        ob.word_holder.appendChild(wrap);
        ob.wordlistbuilt = 'yes';
        this.updateWordList(ob);
    },

    updateWordList: function (ob) {
        var words = ob.word_holder.querySelectorAll('.ws_story_word');
        words.forEach(function (el) {
            var i = parseInt(el.getAttribute('data-word-index'));
            if (ob.foundFlags[i]) {
                el.classList.add('found');
            } else {
                el.classList.remove('found');
            }
        });
    },

    checkTotals: function (ob) {
        return ob.allCorrect;
    },

    resetDraw: function (val) {
        var ob = this.ob;
        var e = $(ob.matrix_holder);
        var corr = e.find('.corrHolder');
        var rect = e.find('.rect');
        if (val == 'all') {
            corr.empty();
            rect.css({ "display": "none" });
            e.find('.cell').removeClass('found selected start end correct-flash wrong-flash');
            e.find('.cell').removeAttr('data-dir');
        } else if (val == 'tmp') {
            rect.css({ "display": "none" });
        }
    },

    reset: function () {
        var ob = this.ob;
        ob.foundFlags = ob.targetWords.map(function () { return false; });
        ob.foundPaths = ob.targetWords.map(function () { return null; });
        ob.foundCount = 0;
        ob.allCorrect = 0;

        this.resetDraw('all');
        this.updateWordList(ob);

        this.is_dragging = false;
        this.selected_path = [];
        this.last_touch_point = null;
        this.drawRect();

        // ---- New: reset the stative-verb task too ----
        this.resetStativeVerbs(ob);
    },

    deleteChild: function (obj) {
        var e = obj;
        var child = e.lastElementChild;
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
    },

    getletters: function (str) {
        var arr = [];
        if (str != null) {
            str = ((str).toString()).split(',');
            for (var i = 0; i < str.length; i++) {
                arr[i] = [];
                var tmpStr = $.trim(str[i]);
                arr[i] = tmpStr.split('');
            }
        }
        return arr;
    },

    initialSettings: function () {
        this.reset();
        if (typeof initialSettingsDone === 'function') initialSettingsDone(1);
    }
};