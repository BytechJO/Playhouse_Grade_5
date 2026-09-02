//  UnscrambleIt - Version no: 1
//  اللوجيك - كلاس حقيقي بنفس نمط FillIn/MCQ
//  خطوتين: 1) كتابة الجملة الصحيحة  2) دائرة على المفعول به المباشر
//           وخط تحت المفعول به غير المباشر
//  ****************************************** //
window.UnscrambleIt = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    this.settings = {
        'activity_area' : ob[0],
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    };
    this.init(this.settings);
};

UnscrambleIt.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },

    listen: function (ob) {
        var self = this;
        var e = $(ob.activity_area);

        // الكتابة بخانة الإدخال - بتعيد بناء الكلمات القابلة للنقر تلقائيًا
        e.on('input', '.unscr-input', function () {
            self.rebuildWords($(this));
            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });

        // كبسة على كلمة: بلا حالة -> دائرة (مباشر) -> خط تحت (غير مباشر) -> بلا حالة
        e.on('click', '.unscr-word', function () {
            var $w = $(this);
            if ($w.hasClass('circled')) {
                $w.removeClass('circled').addClass('underlined');
            } else if ($w.hasClass('underlined')) {
                $w.removeClass('underlined');
            } else {
                $w.addClass('circled');
            }
            $w.removeClass('word-correct word-wrong');

            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });
    },

    // يبني عناصر الكلمات القابلة للنقر من النص المكتوب بالخانة
    rebuildWords: function ($input) {
        var $que = $input.closest('.unscr-que');
        var $wordsWrap = $que.find('.unscr-words');
        $wordsWrap.empty();

        var text = $input.val();
        var words = text.trim().length > 0 ? text.trim().split(/\s+/) : [];

        for (var i = 0; i < words.length; i++) {
            var $span = $('<span class="unscr-word"></span>').text(words[i]);
            $wordsWrap.append($span).append(' ');
        }
    },

    normalizeSentence: function (str) {
        return (str || '').toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, '').trim();
    },
    normalizeWord: function (str) {
        return (str || '').toLowerCase().replace(/[.,!?;:]/g, '');
    },

    validate: function () {
        var self = this;
        var ob = this.ob;
        var e = $(ob.activity_area);
        var allCorrect = true;

        e.find('.unscr-que').each(function () {
            var $que = $(this);
            var qIndx = parseInt($que.data('qno'));
            var qData = ob.data_obj.questions[qIndx - 1];

            // 1) تحقق الجملة
            var $input = $que.find('.unscr-input');
            var typedNorm = self.normalizeSentence($input.val());
            var correctNorm = self.normalizeSentence(qData.answer);
            var sentenceOk = (typedNorm === correctNorm);

            if (!sentenceOk && qData.alternateanswer && qData.alternateanswer.length > 0) {
                for (var a = 0; a < qData.alternateanswer.length; a++) {
                    if (self.normalizeSentence(qData.alternateanswer[a]) === typedNorm) {
                        sentenceOk = true;
                        break;
                    }
                }
            }

            // 2) تحقق الدائرة (مباشر) والخط تحت (غير مباشر)
            var directSet = (qData.directObjects || []).map(function (w) { return self.normalizeWord(w); });
            var indirectSet = (qData.indirectObjects || []).map(function (w) { return self.normalizeWord(w); });

            var markingOk = true;
            $que.find('.unscr-word').each(function () {
                var $w = $(this);
                var wNorm = self.normalizeWord($w.text());
                var isCircled = $w.hasClass('circled');
                var isUnderlined = $w.hasClass('underlined');

                var shouldBeDirect = directSet.indexOf(wNorm) !== -1;
                var shouldBeIndirect = indirectSet.indexOf(wNorm) !== -1;

                $w.removeClass('word-correct word-wrong');

                var thisOk = (shouldBeDirect && isCircled) ||
                             (shouldBeIndirect && isUnderlined) ||
                             (!shouldBeDirect && !shouldBeIndirect && !isCircled && !isUnderlined);

                $w.addClass(thisOk ? 'word-correct' : 'word-wrong');
                if (!thisOk) markingOk = false;
            });

            var queOk = sentenceOk && markingOk;
            if (!queOk) allCorrect = false;

            $que.find('.tick').css('display', queOk ? 'block' : 'none');
            $que.find('.cross').css('display', queOk ? 'none' : 'block');
            $que.find('.icon_wrap').css('display', 'block');
        });

        showFeedback(true, allCorrect);
        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },

    reset: function () {
        var ob = this.ob;
        var e = $(ob.activity_area);

        e.find('.unscr-input').val('');
        e.find('.unscr-words').empty();
        e.find('.icon_wrap').css('display', 'none');
        e.find('.tick, .cross').hide();

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },

    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
};