//  ****************************************** //
//  FindItVerbObject - نشاط تفاعلي
//  الطالب يختار أداة (circle للفعل / underline للمفعول
//  المباشر / check للمفعول الغير مباشر)، وبعدين يدوس على
//  الكلمة/الجزء المناسب جوا الجملة ليطبّق الأداة عليه.
//  ****************************************** //
window.FindItVerbObject = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    this.settings = {
        'activity_area' : ob[0],
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
FindItVerbObject.prototype = {
    init:function(ob){
        this.ob = ob;
        ob.currentTool = null; // 'circle' | 'underline' | 'check' | null
        this.listen(ob);
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);

        // ===== كبسة على زر أداة =====
        var toolBtns = e.querySelectorAll('.tool_btn');
        for (var i = 0; i < toolBtns.length; i++) {
            toolBtns[i].addEventListener('click', function(evt){
                var clickedTool = this.dataset.tool;
                var isAlreadyActive = this.classList.contains('active_tool');

                for (var b = 0; b < toolBtns.length; b++) {
                    toolBtns[b].classList.remove('active_tool');
                }

                if (isAlreadyActive) {
                    ob.currentTool = null;
                    self.updateToolIndicator(ob, null);
                } else {
                    this.classList.add('active_tool');
                    ob.currentTool = clickedTool;
                    self.updateToolIndicator(ob, clickedTool);
                }

                evt.stopPropagation();
            });
        }

        // ===== كبسة على جزء من الجملة =====
        var chunks = e.querySelectorAll('.letter_chunk');
        for (var c = 0; c < chunks.length; c++) {
            chunks[c].addEventListener('click', function(evt){
                evt.stopPropagation();

                if (ob.currentTool == null) {
                    return;
                }

                var newClass = 'annot_' + ob.currentTool;

                this.classList.remove('chunk_correct', 'chunk_wrong');

                if (this.classList.contains(newClass)) {
                    this.classList.remove(newClass);
                } else {
                    this.classList.remove('annot_circle', 'annot_underline', 'annot_check');
                    this.classList.add(newClass);
                }

                if (document.getElementsByClassName('resetBtn')[0] != undefined) {
                    document.getElementsByClassName('resetBtn')[0].classList.remove('disabled');
                }
                if (document.getElementsByClassName('checkBtn')[0] != undefined) {
                    document.getElementsByClassName('checkBtn')[0].classList.remove('disabled');
                }
            });
        }
    },
    updateToolIndicator:function(ob, toolName){
        var indicator = (ob.activity_area).querySelector('.active_tool_indicator');
        if (!indicator) { return; }
        if (toolName == null) {
            indicator.innerHTML = 'Choose a tool above, then click a word in the sentence.';
            indicator.className = 'active_tool_indicator';
        } else {
            var labels = { circle: 'Circle', underline: 'Underline', check: 'Check' };
            indicator.innerHTML = 'Tool selected: <b>' + labels[toolName] + '</b> — click the matching word.';
            indicator.className = 'active_tool_indicator tool_active_' + toolName;
        }
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var chunks = e.querySelectorAll('.letter_chunk');
        var totalChunks = chunks.length;
        var correctCount = 0;

        for (var i = 0; i < chunks.length; i++) {
            var chunkEl = chunks[i];
            chunkEl.classList.remove('chunk_correct', 'chunk_wrong');

            var expected = chunkEl.dataset.correct || '';
            var applied = '';
            if (chunkEl.classList.contains('annot_circle')) { applied = 'circle'; }
            else if (chunkEl.classList.contains('annot_underline')) { applied = 'underline'; }
            else if (chunkEl.classList.contains('annot_check')) { applied = 'check'; }

            var isMatch = (expected === applied);

            if (isMatch) {
                correctCount++;
                if (expected !== '') {
                    chunkEl.classList.add('chunk_correct');
                }
            } else {
                chunkEl.classList.add('chunk_wrong');
            }
        }

        var allCorrect = (correctCount === totalChunks);
        showFeedback(true, allCorrect);

        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add('disabled');
        }
    },
    reset:function(){
        var ob = this.ob;
        var e = (ob.activity_area);

        var chunks = e.querySelectorAll('.letter_chunk');
        for (var i = 0; i < chunks.length; i++) {
            chunks[i].classList.remove('annot_circle', 'annot_underline', 'annot_check', 'chunk_correct', 'chunk_wrong');
        }

        var toolBtns = e.querySelectorAll('.tool_btn');
        for (var b = 0; b < toolBtns.length; b++) {
            toolBtns[b].classList.remove('active_tool');
        }
        ob.currentTool = null;
        this.updateToolIndicator(ob, null);

        if (document.getElementsByClassName('checkBtn')[0] != undefined) {
            document.getElementsByClassName('checkBtn')[0].classList.add('disabled');
        }
        if (document.getElementsByClassName('resetBtn')[0] != undefined) {
            document.getElementsByClassName('resetBtn')[0].classList.add('disabled');
        }
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}