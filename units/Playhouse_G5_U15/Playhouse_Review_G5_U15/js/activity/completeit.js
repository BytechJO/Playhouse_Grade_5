//  ****************************************** //
//  CompleteIt - Version no: 1
//  اللوجيك - كلاس حقيقي بنفس نمط FillIn/MCQ
//  نص متواصل فيه عدة فراغات، كل فراغ إله إجابة صحيحة محددة بترتيبه
//  ****************************************** //
window.CompleteIt = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    this.settings = {
        'activity_area' : ob[0],
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    };
    this.init(this.settings);
};

CompleteIt.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },

    listen: function (ob) {
        var e = $(ob.activity_area);
        e.on('input', '.ci-input', function () {
            $(this).removeClass('correct-input wrong-input');
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
        var dataObj = ob.data_obj;
        var allCorrect = true;

        e.find('.ci-input').each(function () {
            var idx = parseInt($(this).data('index'));
            var typed = self.normalizeWord($(this).val());
            var correct = self.normalizeWord(dataObj.answers[idx]);
            var isCorrect = (typed.length > 0) && (typed === correct);

            $(this).removeClass('correct-input wrong-input');
            $(this).addClass(isCorrect ? 'correct-input' : 'wrong-input');

            if (!isCorrect) allCorrect = false;
        });

        showFeedback(true, allCorrect);
        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },

    reset: function () {
        var ob = this.ob;
        var e = $(ob.activity_area);

        e.find('.ci-input').val('').removeClass('correct-input wrong-input');

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },

    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
};