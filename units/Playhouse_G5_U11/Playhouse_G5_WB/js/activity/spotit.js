//  ****************************************** //
//  SpotIt - Version no: 2
//  نفس نمط FillIn/MCQ بالضبط - كلاس حقيقي بنوع نشاط خاص فيه
//  ****************************************** //
window.SpotIt = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    this.settings = {
        'activity_area' : ob[0],
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    };
    this.init(this.settings);
};

SpotIt.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },

    listen: function (ob) {
        var self = this;
        var e = $(ob.activity_area);

        e.find('.si_word').on('click', function () {
            if (e.hasClass('validated')) return;
            $(this).toggleClass('circled');

            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });
    },

    validate: function () {
        var ob = this.ob;
        var e = $(ob.activity_area);
        var allCorrect = true;

        e.find('.si_word').each(function () {
            var isTarget  = ($(this).data('target') === true || $(this).data('target') === 'true');
            var isCircled = $(this).hasClass('circled');

            $(this).removeClass('correct wrong missed');

            if (isTarget && isCircled) {
                $(this).addClass('correct');
            } else if (!isTarget && isCircled) {
                $(this).addClass('wrong');
                allCorrect = false;
            } else if (isTarget && !isCircled) {
                $(this).addClass('missed');
                allCorrect = false;
            }
        });

        e.addClass('validated');
        document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");

        showFeedback(true, allCorrect);
    },

    reset: function () {
        var ob = this.ob;
        var e = $(ob.activity_area);

        e.removeClass('validated');
        e.find('.si_word').removeClass('circled correct wrong missed');

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },

    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
};