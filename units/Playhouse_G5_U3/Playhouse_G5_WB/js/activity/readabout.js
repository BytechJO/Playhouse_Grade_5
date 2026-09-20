//  ****************************************** //
//  ReadAboutIt - Version no: 2
//  نشاط: دائرة على الفكرة الرئيسية + خط تحت الجمل الداعمة +
//        كتابة الجمل الداعمة بالمربعات (بترتيب حر، بنك مشترك)
//  ****************************************** //
window.ReadAboutIt = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    this.settings = {
        'activity_area': ob[0],
        'data_obj': dataObj,
        'parent_holder': obj[0]
    };
    this.init(this.settings);
};

ReadAboutIt.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
        // زر Check رجع مطلوب - ما منخفيه هلق
    },

    listen: function (ob) {
        var self = this;

        function enableBtns() {
            if (document.getElementsByClassName('checkBtn').length > 0) {
                document.getElementsByClassName('checkBtn')[0].classList.remove('disabled');
            }
            if (document.getElementsByClassName('resetBtn').length > 0) {
                document.getElementsByClassName('resetBtn')[0].classList.remove('disabled');
            }
        }

        // ---- المربعات الحرة ----
        var inputs = ob.activity_area.querySelectorAll('.rb_input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('input', function () {
                this.classList.remove('correct-input', 'wrong-input');
                enableBtns();
            });
        }

        // ---- كبسة على جملة: بلا شي -> دائرة -> خط تحت -> بلا شي ----
        // الدائرة تنحصر بجملة وحدة بس (الفكرة الرئيسية)، بينما الخط
        // تحت ممكن يتحط على أكتر من جملة سوا (الجمل الداعمة)
        var sentences = ob.activity_area.querySelectorAll('.cloud_sentence');
        for (var j = 0; j < sentences.length; j++) {
            sentences[j].addEventListener('click', function () {
                this.classList.remove('sentence-correct', 'sentence-wrong');

                if (this.classList.contains('circled')) {
                    this.classList.remove('circled');
                    this.classList.add('underlined');
                } else if (this.classList.contains('underlined')) {
                    this.classList.remove('underlined');
                } else {
                    // إزالة الدائرة من أي جملة تانية - فكرة رئيسية وحدة بس
                    for (var k = 0; k < sentences.length; k++) {
                        sentences[k].classList.remove('circled');
                    }
                    this.classList.add('circled');
                }

                enableBtns();
            });
        }
    },

    normalizeText: function (str) {
        return (str || '').toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, '').trim();
    },

    validate: function () {
        var self = this;
        var ob = this.ob;
        var dataObj = ob.data_obj;
        var e = ob.activity_area;
        var allCorrect = true;

        // ===== 1) فحص الدائرة (الفكرة الرئيسية) والخط تحت (الجمل الداعمة) =====
        var sentences = e.querySelectorAll('.cloud_sentence');
        for (var i = 0; i < sentences.length; i++) {
            var idx = parseInt(sentences[i].getAttribute('data-sentence-index'));
            var isCircled = sentences[i].classList.contains('circled');
            var isUnderlined = sentences[i].classList.contains('underlined');

            var shouldBeMain = (idx === dataObj.mainIdeaIndex);
            var shouldBeSupport = (dataObj.supportingIndices.indexOf(idx) !== -1);

            sentences[i].classList.remove('sentence-correct', 'sentence-wrong');

            var thisOk = (shouldBeMain && isCircled) ||
                         (shouldBeSupport && isUnderlined) ||
                         (!shouldBeMain && !shouldBeSupport && !isCircled && !isUnderlined);

            sentences[i].classList.add(thisOk ? 'sentence-correct' : 'sentence-wrong');
            if (!thisOk) allCorrect = false;
        }

        // ===== 2) فحص المربعات - بنك مشترك من الجمل الداعمة الصحيحة =====
        var pool = dataObj.supportingIndices.map(function (idx) {
            return { value: self.normalizeText(dataObj.cloudSentences[idx]), used: false };
        });

        var boxes = e.querySelectorAll('.rb_input');
        for (var b = 0; b < boxes.length; b++) {
            var typed = self.normalizeText(boxes[b].value);
            var isCorrect = false;

            if (typed.length > 0) {
                for (var p = 0; p < pool.length; p++) {
                    if (!pool[p].used && pool[p].value === typed) {
                        pool[p].used = true;
                        isCorrect = true;
                        break;
                    }
                }
            }

            boxes[b].classList.remove('correct-input', 'wrong-input');
            boxes[b].classList.add(isCorrect ? 'correct-input' : 'wrong-input');
            if (!isCorrect) allCorrect = false;
        }

        showFeedback(true, allCorrect);
        if (allCorrect) {
            if (document.getElementsByClassName('resetBtn').length > 0) {
                document.getElementsByClassName('resetBtn')[0].classList.add('disabled');
            }
        }
    },

    reset: function () {
        var ob = this.ob;

        var inputs = ob.activity_area.querySelectorAll('.rb_input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
            inputs[i].classList.remove('correct-input', 'wrong-input');
        }

        var sentences = ob.activity_area.querySelectorAll('.cloud_sentence');
        for (var j = 0; j < sentences.length; j++) {
            sentences[j].classList.remove('circled', 'underlined', 'sentence-correct', 'sentence-wrong');
        }

        if (document.getElementsByClassName('checkBtn').length > 0) {
            document.getElementsByClassName('checkBtn')[0].classList.add('disabled');
        }
        if (document.getElementsByClassName('resetBtn').length > 0) {
            document.getElementsByClassName('resetBtn')[0].classList.add('disabled');
        }
    },

    initialSettings: function () {
        this.reset();
        if (typeof initialSettingsDone === 'function') initialSettingsDone(1);
    }
};