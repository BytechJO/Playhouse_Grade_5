//  ****************************************** //
//  FillIn - Version no: 1 (validation fix)
//  ****************************************** //
window.FillIn = function(obj, dataObj){    
    ob = obj[0].getElementsByClassName("options");
    console.log('FillIn > ', $('.activity_area'));
    this.settings = {        
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }    
    this.init(this.settings);
}
FillIn.prototype = {
    init:function(ob){       
        this.ob = ob;
        // this.reset();
        this.listen(ob);
    },
    listen:function(ob){
        var e = (ob.activity_area); 
        var inputs = e.querySelectorAll('input'); 
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("input", function(){                  
                $(this).css('color', 'black');
                console.log($(this).data('type'));
                var v = this.value;  
                if($(this).data('type') == 'number'){
                    if($.isNumeric(v) === false) {               
                        this.value = this.value.replace(/\D/g, '');           
                    }
                }
                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");      
            });
            
        }
    },

    // ---- NEW: normalizes text for comparison.
    // - lower-cases (unless strictcase == 'yes')
    // - converts curly/smart quotes to straight quotes, so a typed
    //   straight apostrophe still matches a curly one stored (or shown)
    //   elsewhere - this was silently causing false negatives before.
    // - collapses runs of whitespace to a single space and trims ends
    //   (previous code stripped ALL whitespace, which happened to still
    //   work for exact matches but hid the real bug rather than fixing it)
    normalize: function (str, fDataObj) {
        var _case = (fDataObj.strictcase != undefined && fDataObj.strictcase != null) ? (fDataObj.strictcase).toLowerCase() : 'no';
        var s = (str == null) ? '' : str.toString();
        if (_case != 'yes') { s = s.toLowerCase(); }
        s = s.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
        s = s.trim().replace(/\s+/g, ' ');
        return s;
    },

    validate:function(){
        var self = this;
        var ob = this.ob;
        var e = (ob.activity_area); 
        var elsQue = e.querySelectorAll('.que'); 
        var numOfFillIns = elsQue.length;
        var allCorrect = false; 
        var resultArr = [];

        // ---- FIX: build a per-group pool of correct answers first.
        // Each group (groupNo) collects the answers of every question
        // that belongs to it. Validation below checks group MEMBERSHIP
        // (any unused match in the same group), not a fixed question
        // index - so re-ordering answers within the same group is still
        // marked correct. ----
        var groupPools = {};
        for (var g = 0; g < elsQue.length; g++) {
            var gIndx = parseInt(elsQue[g].dataset.qno);
            var gDataObj = (ob.data_obj).questions[gIndx - 1];
            var gNo = gDataObj.groupNo;
            if (!groupPools[gNo]) { groupPools[gNo] = []; }
            var rawAns = getStrArray(gDataObj.answer, 'activity')[0];
            groupPools[gNo].push({ text: self.normalize(rawAns, gDataObj), used: false });
        }

        for (var i = 0; i < elsQue.length; i++) { 
            resultArr[i] = 0;
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = ((ob.data_obj).questions[fIndx-1]);
            var gNo = fDataObj.groupNo;

            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            var inputBoxes = elsQue[i].querySelectorAll('input');
            var isCorrect = false;

            if (inputBoxes.length > 0 && (inputBoxes[0].value || '').trim().length > 0) {
                var typed = self.normalize(inputBoxes[0].value, fDataObj);
                var pool = groupPools[gNo] || [];
                for (var p = 0; p < pool.length; p++) {
                    if (!pool[p].used && pool[p].text === typed) {
                        pool[p].used = true;
                        isCorrect = true;
                        break;
                    }
                }
            }

            if (isCorrect) {
                resultArr[i] = 1;
                (elsQue[i].querySelector('.tick')).style.display = 'block';
                if(fDataObj.audio != '' && fDataObj.audio != 'no' ){   
                    if(fDataObj.audioenable == 'correct' && ((elsQue[i].querySelectorAll('.audioIcon')).length > 0)) {
                        (elsQue[i].querySelector('.audioIcon')).classList.remove("disabled");
                    }              
                }
            }else{
                resultArr[i] = 0;
                (elsQue[i].querySelector('.cross')).style.display = 'block';
                if(fDataObj.audio != '' && fDataObj.audio != 'no'){   
                    if(fDataObj.audioenable == 'correct' && ((elsQue[i].querySelectorAll('.audioIcon')).length > 0)) {               
                        (elsQue[i].querySelector('.audioIcon')).classList.add("disabled");
                    }
                }
            }
            if((elsQue[i].querySelectorAll('.icon_wrap')).length > 0) {
                (elsQue[i].querySelector('.icon_wrap')).style.display = 'block';
            }     
        }
        console.log(resultArr, numOfFillIns);
        allCorrect = (resultArr.indexOf(0) === -1);
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
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = ((ob.data_obj).questions[fIndx-1]);
            (elsQue[i].querySelector('.icon_wrap')).style.display = 'none'; 
            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';
            if(fDataObj.audio != '' && fDataObj.audio != 'no'){ 
                if((elsQue[i].querySelectorAll('.audioIcon')).length > 0){
                    if(fDataObj.audioenable == 'correct'){                
                        (elsQue[i].querySelector('.audioIcon')).style.display = 'block';
                        (elsQue[i].querySelector('.audioIcon')).classList.add("disabled");
                    }else if(fDataObj.audioenable == 'default'){
                        (elsQue[i].querySelector('.audioIcon')).style.display = 'block';
                        (elsQue[i].querySelector('.audioIcon')).classList.remove("disabled");
                    }
                }
            }
            var inputBoxes = elsQue[i].querySelectorAll('input');           
            if(inputBoxes.length > 0){
                for(var a=0;a<inputBoxes.length;a++){
                    if ((inputBoxes[a].getAttribute("disabled")==null)&& (inputBoxes[a].getAttribute("readonly")==null)){
                        inputBoxes[a].value = '';
                        inputBoxes[a].style.color = 'black';
                    }
                }
            }
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");           
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);  
    }
}