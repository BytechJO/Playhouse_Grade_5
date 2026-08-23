//  ****************************************** //
//  FillIn - Version no: 1
//  Date updated - June 3, 2020 
//  Modified: validate() now checks each blank against the FULL pool of
//  correct answers (not just its own assigned answer). A correct answer
//  can only be "claimed" by ONE blank — if the same correct answer is
//  typed into more than one blank, only the first one is marked correct;
//  any later duplicate is marked wrong.
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
                // document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                // document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");      
            });
            
        }
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area); 
        var elsQue = e.querySelectorAll('.que'); 
        var numOfFillIns = elsQue.length;
        var allCorrect = false; 
        var resultArr = [];
        var allQuestions = ob.data_obj.questions;

        // tracks which correct-answer "slots" have already been matched
        // by an earlier blank, so the same answer can't be reused.
        var claimed = new Array(allQuestions.length).fill(false);

        for (var i = 0; i < elsQue.length; i++) { 
            resultArr[i] = 0;
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = allQuestions[fIndx-1]; // still used for audio / icon settings of this blank
            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            var inputBoxes = elsQue[i].querySelectorAll('input'); 
            var _isReadOnly = [];
            var _uAnsArr = [];

            if(inputBoxes.length > 0){
                for(var a=0;a<inputBoxes.length;a++){
                    _isReadOnly[a] = ((inputBoxes[a].getAttribute("disabled")==null)&& (inputBoxes[a].getAttribute("readonly")==null))?0:1;
                    _uAnsArr[a] = inputBoxes[a].value || '';
                }
            }

            // combine all input parts of this blank into one answer string
            var _userAnswerRaw = _uAnsArr.join(' ').trim();

            var _cAnsForIcon = getStrArray(fDataObj.answer, 'activity');
            (elsQue[i].dataset).showIcon = (((_isReadOnly.join('').split('1'))[0]).length == _cAnsForIcon.length); 

            var matchedIndex = -1;

            // search every NOT-YET-CLAIMED question's answer / alternate answers
            // for a match against what the student typed in this blank
            if(_userAnswerRaw.length > 0){
                for (var q = 0; q < allQuestions.length; q++) {
                    if (claimed[q]) { continue; } // already used by another blank

                    var qData = allQuestions[q];
                    var _case = (qData.strictcase != undefined && qData.strictcase != null) ? (qData.strictcase).toLowerCase() : 'no';

                    var candidates = [].concat(qData.answer || []);
                    if (qData.alternateanswer && qData.alternateanswer.length > 0) {
                        qData.alternateanswer.forEach(function(altGroup){
                            candidates = candidates.concat(altGroup);
                        });
                    }

                    var userNorm = (_case == 'yes') ? _userAnswerRaw : _userAnswerRaw.toLowerCase();
                    userNorm = userNorm.replace(/\s/g, '');

                    for (var c = 0; c < candidates.length; c++) {
                        var candNorm = (_case == 'yes') ? candidates[c] : candidates[c].toLowerCase();
                        candNorm = candNorm.replace(/\s/g, '');
                        if (userNorm == candNorm) {
                            matchedIndex = q;
                            break;
                        }
                    }
                    if (matchedIndex != -1) { break; }
                }
            }

            if (matchedIndex != -1) {
                claimed[matchedIndex] = true; // lock this answer so no other blank can reuse it
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
                if((elsQue[i].dataset).showIcon == "true"){
                    (elsQue[i].querySelector('.icon_wrap')).style.display = 'block'; 
                }                
            }     
        }
        console.log(resultArr, numOfFillIns);
        allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfFillIns); 
        showFeedback(true,allCorrect);
       
        if(allCorrect){
            // document.getElementsByClassName('resetBtn')[0].classList.add("disabled"); 
        }        
    },
    reset:function(){
        var ob = this.ob;        
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');  
        // console.log('reset function >> ', elsQue.length, (ob.data_obj));     
        for (var i = 0; i < elsQue.length; i++) { 
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = ((ob.data_obj).questions[fIndx-1]);
            (elsQue[i].querySelector('.icon_wrap')).style.display = 'none'; 
            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';
            // console.log('reset function >> ', fIndx, ((ob.data_obj).questions[fIndx-1]));
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
            }else{
                if((elsQue[i].querySelectorAll('.audioIcon')).length > 0){
                    // (elsQue[i].querySelector('.audioIcon')).style.display = 'none';
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
        // document.getElementsByClassName('checkBtn')[0].classList.add("disabled");           
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);  
    }
}