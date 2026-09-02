//  ****************************************** //
//  ColourTargetWords - Version no: 1
//  Click a target word to toggle red colour on/off. Validate checks that
//  every needsColour word is coloured and every other word is NOT.
//  ****************************************** //
window.ColourTargetWords = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('ColourTargetWords > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
ColourTargetWords.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    listen:function(ob){
        var e = (ob.activity_area);
        var wordWraps = e.querySelectorAll('.ctw_wordWrap');

        for (var i = 0; i < wordWraps.length; i++) {
            wordWraps[i].addEventListener('click', function(){
                var isColoured = this.classList.contains('ctw_coloured');
                if(isColoured){
                    this.classList.remove('ctw_coloured');
                }else{
                    this.classList.add('ctw_coloured');
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

        for (var i = 0; i < elsQue.length; i++) {
            resultArr[i] = 0;
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var qData = (ob.data_obj).questions[fIndx-1];

            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            var wordWraps = elsQue[i].querySelectorAll('.ctw_wordWrap');
            var isRight = true;

            for (var w = 0; w < wordWraps.length; w++) {
                var widx = parseInt(wordWraps[w].dataset.widx);
                var shouldColour = qData.words[widx].needsColour;
                var isColoured = wordWraps[w].classList.contains('ctw_coloured');

                if(isColoured != shouldColour){ isRight = false; }
            }

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
            var wordWraps = elsQue[i].querySelectorAll('.ctw_wordWrap');
            for (var w = 0; w < wordWraps.length; w++) {
                wordWraps[w].classList.remove('ctw_coloured');
            }
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}