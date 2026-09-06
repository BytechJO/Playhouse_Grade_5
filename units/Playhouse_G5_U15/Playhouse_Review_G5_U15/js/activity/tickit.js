//  ****************************************** //
//  TickIt - Version no: 1
//  اللوجيك - كلاس حقيقي بنفس نمط FillIn/MCQ
//  كبسة على المربع = تبديل تِك/بلا تِك، والتصحيح يقارن حالة كل
//  مربع مع القيمة المتوقعة (isLinking) بالداتا
//  ****************************************** //
window.TickIt = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    this.settings = {
        'activity_area' : ob[0],
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    };
    this.init(this.settings);
};

TickIt.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },

    listen: function (ob) {
        var e = $(ob.activity_area);
        e.on('click', '.ti-box', function () {
            $(this).toggleClass('checked');
            $(this).removeClass('correct wrong');
            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });
    },

    validate: function () {
        var ob = this.ob;
        var e = $(ob.activity_area);
        var dataObj = ob.data_obj;
        var allCorrect = true;

        e.find('.ti-cell').each(function () {
            var qIndx = parseInt($(this).data('qno'));
            var expected = dataObj.sentences[qIndx - 1].isLinking;
            var $box = $(this).find('.ti-box');
            var isChecked = $box.hasClass('checked');

            var isCorrect = (isChecked === expected);

            $box.removeClass('correct wrong');

            if (isChecked && isCorrect) {
                // تِك محطوط وصحيح - أخضر
                $box.addClass('correct');
            } else if (!isCorrect) {
                // إما تِك بمكان غلط، أو فاضي بمكان كان لازم يكون فيه تِك - أحمر
                $box.addClass('wrong');
            }
            // else: فاضي وصح إنه يضل فاضي -> بلا لون إطلاقًا

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

        e.find('.ti-box').removeClass('checked correct wrong');

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },

    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
};