//  ****************************************** //
//  FillIn - Version no: 1
//  Date updated - June 3, 2020 
//  Update: دعم poolPerColumn:true - بنك إجابات مستقل لكل عمود، بحيث
//          ترتيب الكلمات جوا نفس العمود حر، بس لازم تكون تحت
//          العمود الصحيح
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

    // ============ هل النشاط بده بنك مستقل لكل عمود لحاله؟ ============
    isPoolPerColumnActivity:function(dataObj){
        return (dataObj.poolPerColumn === true);
    },

    validatePoolPerColumn:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var dataObj = ob.data_obj;
        var numOfRow = dataObj.numOfRow;
        var elsQue = e.querySelectorAll('.que');
        var resultArr = [];

        // 1) ابني بنك إجابات مستقل لكل عمود
        var colPools = [];
        var startIdx = 0;
        for (var c = 0; c < numOfRow.length; c++) {
            var pool = [];
            for (var r = 0; r < numOfRow[c]; r++) {
                var qData = dataObj.questions[startIdx + r];
                var _case = (qData.strictcase != undefined && qData.strictcase != null && (qData.strictcase).toLowerCase() == 'yes');
                var ansArr = getStrArray(qData.answer, 'activity');
                var ansStr = (ansArr && ansArr.length > 0) ? ansArr[0] : '';
                var norm = (_case ? ansStr : ansStr.toLowerCase()).replace(/\s/g, '');
                pool.push({ value: norm, used: false });
            }
            colPools.push(pool);
            startIdx += numOfRow[c];
        }

        // 2) خريطة: رقم السؤال (qno) -> رقم عموده
        var qnoToCol = {};
        startIdx = 0;
        for (var c2 = 0; c2 < numOfRow.length; c2++) {
            for (var r2 = 0; r2 < numOfRow[c2]; r2++) {
                qnoToCol[startIdx + r2 + 1] = c2;
            }
            startIdx += numOfRow[c2];
        }

        // 3) لكل خانة، قارنها مع بنك عمودها هي بس
        for (var i = 0; i < elsQue.length; i++) {
            var qno = parseInt(elsQue[i].dataset.qno);
            var qData2 = dataObj.questions[qno - 1];
            var _case2 = (qData2.strictcase != undefined && qData2.strictcase != null && (qData2.strictcase).toLowerCase() == 'yes');
            var col = qnoToCol[qno];
            var pool2 = colPools[col];

            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            var input = elsQue[i].querySelector('input');
            var isCorrect = false;

            if (!input) {
                // خانة جاهزة (readonly) - صحيحة تلقائيًا
                isCorrect = true;
            } else {
                var uVal = input.value;
                uVal = (uVal.length > 0) ? ((_case2 ? uVal : uVal.toLowerCase()).replace(/\s/g, '')) : '';
                if (uVal.length > 0) {
                    for (var p = 0; p < pool2.length; p++) {
                        if (!pool2[p].used && pool2[p].value === uVal) {
                            pool2[p].used = true;
                            isCorrect = true;
                            break;
                        }
                    }
                }
            }

            resultArr[i] = isCorrect ? 1 : 0;

            if (isCorrect) {
                (elsQue[i].querySelector('.tick')).style.display = 'block';
                if (qData2.audio != '' && qData2.audio != 'no') {
                    if (qData2.audioenable == 'correct' && (elsQue[i].querySelectorAll('.audioIcon')).length > 0) {
                        (elsQue[i].querySelector('.audioIcon')).classList.remove("disabled");
                    }
                }
            } else {
                (elsQue[i].querySelector('.cross')).style.display = 'block';
                if (qData2.audio != '' && qData2.audio != 'no') {
                    if (qData2.audioenable == 'correct' && (elsQue[i].querySelectorAll('.audioIcon')).length > 0) {
                        (elsQue[i].querySelector('.audioIcon')).classList.add("disabled");
                    }
                }
            }

            if ((elsQue[i].querySelectorAll('.icon_wrap')).length > 0) {
                (elsQue[i].querySelector('.icon_wrap')).style.display = 'block';
            }
        }

        var allCorrect = (resultArr.indexOf(0) === -1);
        showFeedback(true, allCorrect);
        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },

    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area); 
        var dataObj = ob.data_obj;

        // بنك مستقل لكل عمود - راجع poolPerColumn:true بالداتا
        if (this.isPoolPerColumnActivity(dataObj)) {
            this.validatePoolPerColumn();
            return;
        }

        // -------- المنطق العادي (كل خانة تتفحص مقابل إجابتها الخاصة بترتيبها الأصلي) --------
        var elsQue = e.querySelectorAll('.que'); 
        var numOfFillIns = elsQue.length;
        var allCorrect = false; 
        var resultArr = [];        
        for (var i = 0; i < elsQue.length; i++) { 
            resultArr[i] = 0;
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = ((ob.data_obj).questions[fIndx-1]);
            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';
            var _case = (fDataObj.strictcase != undefined && fDataObj.strictcase!=null )? (fDataObj.strictcase).toLowerCase():'no';
            var _cAns = getStrArray(fDataObj.answer, 'activity');            
            var _uAns = [];
            var _isReadOnly = [];
            var _corr = 0;
            var _wrong = 0;
            var inputBoxes = elsQue[i].querySelectorAll('input'); 

            // خانة جاهزة (readonly، بدون input) - صحيحة تلقائيًا
            if (inputBoxes.length === 0) {
                resultArr[i] = 1;
                if (fDataObj.audio != '' && fDataObj.audio != 'no') {
                    if (fDataObj.audioenable == 'correct' && ((elsQue[i].querySelectorAll('.audioIcon')).length > 0)) {
                        (elsQue[i].querySelector('.audioIcon')).classList.remove("disabled");
                    }
                }
                continue;
            }

            if(inputBoxes.length > 0){
                for(var a=0;a<inputBoxes.length;a++){
                    console.log(a, inputBoxes[a].dataset.type);
                    _isReadOnly[a] = ((inputBoxes[a].getAttribute("disabled")==null)&& (inputBoxes[a].getAttribute("readonly")==null))?0:1;
                   // if ((inputBoxes[a].getAttribute("disabled")==null)&& (inputBoxes[a].getAttribute("readonly")==null)){
                        if((inputBoxes[a].value).length > 0){
                            if(inputBoxes[a].dataset.type != 'number'){
                                _uAns[a] = (_case == 'yes')? inputBoxes[a].value:(inputBoxes[a].value).toLowerCase();
                            }else{
                                _uAns[a] = inputBoxes[a].value;
                            }
                            
                        }
                    //}
                }
            }
            (elsQue[i].dataset).showIcon = (((_isReadOnly.join('').split('1'))[0]).length == _cAns.length); 
            console.log(_uAns, _cAns, (((_isReadOnly.join('').split('1'))[0]).length == _cAns.length), i, (elsQue[i].dataset).showIcon);
          
            
           
            if((_uAns.length>0) && (_cAns.length == _uAns.length)){
                for(var cc=0;cc<_cAns.length;cc++){                    
                    _cAns[cc] = (_case == 'yes')? _cAns[cc]: _cAns[cc].toLowerCase();  
                   _cAns[cc] = (_cAns[cc]).replace(/\s/g, '');
                   _uAns[cc] = (_uAns[cc]).replace(/\s/g, '');
                    if(_cAns[cc] == _uAns[cc]){
                        _corr++;
                        // if(_isReadOnly[cc] != 1)  {
                            // inputBoxes[cc].style.color = 'green';
                        // }                      
                        
                    }else{
                        _wrong++;
                        // if(_isReadOnly[cc] != 1)  {                         
                            // inputBoxes[cc].style.color = 'red';
                        // }
                    }
                } 
            }else{
                _wrong++;                  
            }
            if(_corr == _uAns.length && _wrong == 0){
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
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled"); 
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
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");           
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);  
    }
}