//  ****************************************** //
//  ReadAboutIt - Version no: 1
//  Free-writing activity: static cloud text + 3 free-text boxes.
//  No answer key, no correctness checking (per requirement).
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

        // Nothing to grade in this activity — hide the Check button so
        // students aren't invited to press a button that does nothing.
        if (document.getElementsByClassName('checkBtn').length > 0) {
            document.getElementsByClassName('checkBtn')[0].classList.add('d-none');
        }
    },

    listen: function (ob) {
        var inputs = ob.activity_area.querySelectorAll('.rb_input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('input', function () {
                if (document.getElementsByClassName('resetBtn').length > 0) {
                    document.getElementsByClassName('resetBtn')[0].classList.remove('disabled');
                }
            });
        }

        // ---- "Circle the main idea" — free selection, single sentence,
        // no correctness check (same spirit as the free-text boxes). ----
        var sentences = ob.activity_area.querySelectorAll('.cloud_sentence');
        for (var j = 0; j < sentences.length; j++) {
            sentences[j].addEventListener('click', function () {
                var alreadyPicked = this.classList.contains('circled');
                for (var k = 0; k < sentences.length; k++) {
                    sentences[k].classList.remove('circled');
                }
                if (!alreadyPicked) {
                    this.classList.add('circled'); // click again to deselect
                }
                if (document.getElementsByClassName('resetBtn').length > 0) {
                    document.getElementsByClassName('resetBtn')[0].classList.remove('disabled');
                }
            });
        }
    },

    // No-op on purpose: kept so the shared checkBtn click handler in
    // activities.js (theActivity.validate()) never throws, in case the
    // Check button is ever shown again for this activity type.
    validate: function () {},

    reset: function () {
        var ob = this.ob;
        var inputs = ob.activity_area.querySelectorAll('.rb_input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
        var sentences = ob.activity_area.querySelectorAll('.cloud_sentence');
        for (var j = 0; j < sentences.length; j++) {
            sentences[j].classList.remove('circled');
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