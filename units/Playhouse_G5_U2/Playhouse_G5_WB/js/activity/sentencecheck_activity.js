//  ****************************************** //
//  SentenceCheck - Version no: 1
//  ****************************************** //
window.SentenceCheck = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    this.settings = {
        'activity_area' : ob[0],
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
SentenceCheck.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    listen:function(ob){
        var e = (ob.activity_area);
        var boxes = e.querySelectorAll('.sc_toggle_box');

        for (var i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener("click", function(){
                var $box = $(this);
                var current = $box.attr('data-value') || '';

                // أول كليكة = صح، تاني كليكة = خطأ، وهكذا بيتبدل بينهم
                var next = (current == 'yes') ? 'no' : 'yes';
                $box.attr('data-value', next);

                var iconSrc = (next == 'yes') ? '../images/icons/check_btn.png' : '../images/icons/cross_btn.png';
                $box.find('.sc_toggle_icon').attr('src', iconSrc).show();

                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });
        }
    },
    validate:function(){
        var self = this;
        var ob = this.ob;
        var $area = $(ob.activity_area);
        var numOfQs = $area.find('.que').length;
        var resultArr = [];
        var allCorrect = false;

        $area.find('.que').each(function(index){
            var qIndx = parseInt($(this).data('qno'));
            var fDataObj = ((ob.data_obj).questions[qIndx-1]);
            resultArr[qIndx-1] = 0;

            var selectedValue = $(this).find('.sc_toggle_box').attr('data-value') || null;

            var isToggleCorrect = (selectedValue === fDataObj.iscorrect);
            var isFullyCorrect = isToggleCorrect;

            // إذا الجملة أصلاً غلط، لازم كمان يكتب الجملة المصححة صح
            // بالخط تحتها عشان يعتبر كامل صح.
            if (fDataObj.iscorrect == 'no') {
                var _case = (fDataObj.strictcase != undefined && fDataObj.strictcase != null) ? (fDataObj.strictcase).toLowerCase() : 'no';
                var _cAns = getStrArray(fDataObj.correctedSentence, 'activity');
                var _cAltAns = (fDataObj.alternatecorrected && fDataObj.alternatecorrected[0] && fDataObj.alternatecorrected[0].length > 0) ? getStrArray(fDataObj.alternatecorrected[0], 'activity') : [];

                var rewriteVal = $(this).find('.sc_rewrite_input').val();
                rewriteVal = (rewriteVal != undefined) ? $.trim(rewriteVal) : '';
                rewriteVal = (_case == 'yes') ? rewriteVal : rewriteVal.toLowerCase();

                var isRewriteCorrect = false;
                _cAns.forEach(function(a){
                    var normA = (_case == 'yes') ? $.trim(a) : ($.trim(a)).toLowerCase();
                    if (normA == rewriteVal && rewriteVal != '') { isRewriteCorrect = true; }
                });
                if (!isRewriteCorrect) {
                    _cAltAns.forEach(function(a){
                        var normA = (_case == 'yes') ? $.trim(a) : ($.trim(a)).toLowerCase();
                        if (normA == rewriteVal && rewriteVal != '') { isRewriteCorrect = true; }
                    });
                }

                isFullyCorrect = isToggleCorrect && isRewriteCorrect;
            }

            resultArr[qIndx-1] = isFullyCorrect ? 1 : 0;

            (($(this).find('.tick'))).css('display', isFullyCorrect ? 'block' : 'none');
            (($(this).find('.cross'))).css('display', isFullyCorrect ? 'none' : 'block');
            $(this).find('.icon_wrap').css('display', 'block');
        });

        allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfQs);
        showFeedback(true, allCorrect);

        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset:function(){
        var ob = this.ob;
        var $area = $(ob.activity_area);

        $area.find('.que').each(function(){
            $(this).find('.sc_toggle_box').attr('data-value', '');
            $(this).find('.sc_toggle_icon').hide().attr('src', '');
            $(this).find('.sc_rewrite_input').val('');
            $(this).find('.icon_wrap').css('display', 'none');
            $(this).find('.tick, .cross').css('display', 'none');
        });

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}