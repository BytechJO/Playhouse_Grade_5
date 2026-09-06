//  ****************************************** //
//  WriteIt - Version no: 1
//  اللوجيك - كلاس حقيقي بنفس نمط FillIn/MCQ
//  عمود Homonym: يتفحص مقابل لستة كلمات مقبولة
//  عمود Sentence: نص حر - بس يشترط إنو مو فاضي وفيه الكلمة يلي كتبها
//                 الطالب بعمود Homonym فعليًا مستخدمة فيه
//  ****************************************** //
window.WriteIt = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    this.settings = {
        'activity_area' : ob[0],
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    };
    this.init(this.settings);
};

WriteIt.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },

    listen: function (ob) {
        var e = $(ob.activity_area);
        e.on('input', '.wi-homonym-input, .wi-sentence-input', function () {
            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });
    },

    normalizeWord: function (str) {
        return (str || '').toLowerCase().replace(/[.,!?;:'"]/g, '').trim();
    },

    validate: function () {
        var self = this;
        var ob = this.ob;
        var e = $(ob.activity_area);
        var allCorrect = true;

        e.find('.wi-que').each(function () {
            var $que = $(this);
            var qIndx = parseInt($que.data('qno'));
            var qData = ob.data_obj.questions[qIndx - 1];

            var $homInput = $que.find('.wi-homonym-input');
            var $senInput = $que.find('.wi-sentence-input');

            var typedHomonym = self.normalizeWord($homInput.val());
            var acceptedList = (qData.homonyms || []).map(function (w) { return self.normalizeWord(w); });
            var homonymOk = (typedHomonym.length > 0) && (acceptedList.indexOf(typedHomonym) !== -1);

            // الجملة: مو فاضية + فيها فعليًا الهوموفون يلي كتبه الطالب ككلمة مستقلة
            var sentenceVal = $senInput.val() || '';
            var sentenceNotEmpty = sentenceVal.trim().length > 0;
            var sentenceWords = sentenceVal.toLowerCase().replace(/[.,!?;:'"]/g, '').split(/\s+/);
            var usesHomonym = typedHomonym.length > 0 && sentenceWords.indexOf(typedHomonym) !== -1;

            var sentenceOk = sentenceNotEmpty && usesHomonym;

            var queOk = homonymOk && sentenceOk;
            if (!queOk) allCorrect = false;

            $homInput.removeClass('correct-input wrong-input');
            $homInput.addClass(homonymOk ? 'correct-input' : 'wrong-input');

            $senInput.removeClass('correct-input wrong-input');
            $senInput.addClass(sentenceOk ? 'correct-input' : 'wrong-input');

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

        e.find('.wi-homonym-input, .wi-sentence-input').val('').removeClass('correct-input wrong-input');
        e.find('.icon_wrap').css('display', 'none');
        e.find('.tick, .cross').hide();

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },

    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
};