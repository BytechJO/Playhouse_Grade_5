//  ****************************************** //
//  FillCircleWord - Version no: 1
//  Blank must match "answer" (good/well) exactly. The circle target word
//  must be circled. Both must be correct for the question to pass.
//  ****************************************** //
window.FillCircleWord = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('FillCircleWord > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
FillCircleWord.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    drawCircle:function(svg, wordEl){
        var w = wordEl.offsetWidth;
        var h = wordEl.offsetHeight;
        var pad = 7;
        svg.setAttribute('viewBox', '0 0 ' + (w + pad*2) + ' ' + (h + pad*2));
        var rx = (w/2) + (pad*0.9);
        var ry = (h/2) + (pad*0.7);
        var cx = (w/2) + pad;
        var cy = (h/2) + pad;
        var path = 'M ' + cx + ' ' + (cy-ry) +
                   ' C ' + (cx+rx*1.1) + ' ' + (cy-ry*0.9) + ', ' + (cx+rx*1.05) + ' ' + (cy+ry*1.05) + ', ' + cx + ' ' + (cy+ry) +
                   ' C ' + (cx-rx*1.15) + ' ' + (cy+ry*0.95) + ', ' + (cx-rx*0.9) + ' ' + (cy-ry*1.1) + ', ' + cx + ' ' + (cy-ry) + ' Z';
        svg.innerHTML = '<path d="' + path + '" fill="none" stroke="#e2574c" stroke-width="2.5" stroke-linecap="round"/>';
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);

        var inputs = e.querySelectorAll('.fcw_input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('input', function(){
                $(this).css('color', 'black');
                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });
        }

        var wordWraps = e.querySelectorAll('.fcw_wordWrap');
        for (var i = 0; i < wordWraps.length; i++) {
            wordWraps[i].addEventListener('click', function(){
                var wordEl = this.querySelector('.fcw_word');
                var svg = this.querySelector('.fcw_svg');
                var isCircled = this.classList.contains('fcw_circled');

                if(isCircled){
                    this.classList.remove('fcw_circled');
                    svg.innerHTML = '';
                }else{
                    this.classList.add('fcw_circled');
                    self.drawCircle(svg, wordEl);
                }

                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });
        }
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');
        var numOfQuestions = elsQue.length;
        var allCorrect = false;
        var resultArr = [];

        var _case = (ob.data_obj.strictcase != undefined && ob.data_obj.strictcase!=null )? (ob.data_obj.strictcase).toLowerCase():'no';

        for (var i = 0; i < elsQue.length; i++) {
            resultArr[i] = 0;
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var qData = (ob.data_obj).questions[fIndx-1];

            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            // ---- check the blank ----
            var inputEl = elsQue[i].querySelector('.fcw_input');
            var uVal = inputEl.value;
            var cVal = qData.answer;
            if(_case != 'yes'){
                uVal = uVal.toLowerCase();
                cVal = cVal.toLowerCase();
            }
            uVal = uVal.trim();
            cVal = cVal.trim();
            var blankRight = (uVal == cVal && uVal.length > 0);

            // ---- check the circle target word ----
            var wordWrap = elsQue[i].querySelector('.fcw_wordWrap');
            var circleRight = wordWrap ? wordWrap.classList.contains('fcw_circled') : true;

            var isRight = blankRight && circleRight;

            if(isRight){
                resultArr[i] = 1;
                (elsQue[i].querySelector('.tick')).style.display = 'block';
            }else{
                resultArr[i] = 0;
                (elsQue[i].querySelector('.cross')).style.display = 'block';
            }
        }

        console.log(resultArr, numOfQuestions);
        allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfQuestions);
        showFeedback(true,allCorrect);

        if(allCorrect){
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');

        for (var i = 0; i < elsQue.length; i++) {
            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            var inputEl = elsQue[i].querySelector('.fcw_input');
            inputEl.value = '';
            inputEl.style.color = 'black';

            var wordWrap = elsQue[i].querySelector('.fcw_wordWrap');
            if(wordWrap){
                wordWrap.classList.remove('fcw_circled');
                wordWrap.querySelector('.fcw_svg').innerHTML = '';
            }
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}