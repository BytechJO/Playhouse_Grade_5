window.MindMap = function(obj, dataObj){
    this.ob = { boxes: obj[0].querySelectorAll('.mindtext') };
    var self = this;
    this.ob.boxes.forEach(function(box){
        box.addEventListener('input', function(){
            document.getElementsByClassName('resetBtn')[0].classList.remove('disabled');
        });
    });
}
MindMap.prototype = {
    reset:function(){
        this.ob.boxes.forEach(function(box){ box.value = ''; });
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}