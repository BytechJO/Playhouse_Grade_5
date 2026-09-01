//  ****************************************** //
//  ComplaintLetter - نشاط تفاعلي
//  الطالب يختار أداة (circle / underline / box) من قائمة
//  التعليمات، وبعدين يدوس على الجمل جوا الرسالة ليطبّق
//  الشكل المختار عليها. فيه تصحيح اختياري يقارن كل جزء
//  مع "correctStyle" الجاي من الداتا.
//  ****************************************** //
window.ComplaintLetter = function(obj, dataObj){
    var optionsEls = obj && obj[0] ? obj[0].getElementsByClassName("options") : null;
    if (!optionsEls || !optionsEls[0]) {
        console.error("ComplaintLetter: .options element not found — check obj type / build order", obj);
        return;
    }
    this.settings = {
        'activity_area' : optionsEls[0],
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
ComplaintLetter.prototype = {
    init:function(ob){
        this.ob = ob;
        ob.currentTool = null; // 'circle' | 'underline' | 'box' | null
        this.listen(ob);
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);

        // ===== كبسة على زر أداة (Circle / Underline / Box) =====
        var toolBtns = e.querySelectorAll('.tool_btn');
        for (var i = 0; i < toolBtns.length; i++) {
            toolBtns[i].addEventListener('click', function(evt){
                // لو الأداة نفسها مفعّلة أصلاً وكبسنا عليها تاني، نلغي التفعيل (toggle off)
                var clickedTool = this.dataset.tool;
                var isAlreadyActive = this.classList.contains('active_tool');

                // نشيل التفعيل من كل الأزرار أولاً
                for (var b = 0; b < toolBtns.length; b++) {
                    toolBtns[b].classList.remove('active_tool');
                }

                if (isAlreadyActive) {
                    ob.currentTool = null;
                    self.updateToolIndicator(ob, null);
                } else {
                    this.classList.add('active_tool');
                    ob.currentTool = clickedTool;
                    self.updateToolIndicator(ob, clickedTool);
                }

                // ما بدنا الكبسة تشغل/توقف صوت البوب أب أو أي حدث أعلى
                evt.stopPropagation();
            });
        }

        // ===== كبسة على جزء من الرسالة (letter_chunk) =====
        var chunks = e.querySelectorAll('.letter_chunk');
        for (var c = 0; c < chunks.length; c++) {
            chunks[c].addEventListener('click', function(evt){
                evt.stopPropagation();

                if (ob.currentTool == null) {
                    // ما اختار أداة لسا - ما منعمل شي
                    return;
                }

                var newClass = 'annot_' + ob.currentTool;

                // نشيل أي تصنيف تصحيح سابق (correct/wrong) لأنو الطالب عم يعدّل
                this.classList.remove('chunk_correct', 'chunk_wrong');

                if (this.classList.contains(newClass)) {
                    // نفس الأداة مطبقة عليه أصلاً - نشيلها (toggle off)
                    this.classList.remove(newClass);
                } else {
                    // نشيل أي أداة قديمة كانت مطبقة، ونحط الجديدة
                    this.classList.remove('annot_circle', 'annot_underline', 'annot_box');
                    this.classList.add(newClass);
                }

                // فعّلنا تعديل - نشيل تفعيل زر Reset إذا كان معطل
                if (document.getElementsByClassName('resetBtn')[0] != undefined) {
                    document.getElementsByClassName('resetBtn')[0].classList.remove('disabled');
                }
                if (document.getElementsByClassName('checkBtn')[0] != undefined) {
                    document.getElementsByClassName('checkBtn')[0].classList.remove('disabled');
                }
            });
        }
    },
    updateToolIndicator:function(ob, toolName){
        var indicator = (ob.activity_area).querySelector('.active_tool_indicator');
        if (!indicator) { return; }
        if (toolName == null) {
            indicator.innerHTML = 'Choose a tool below, then click on the letter.';
            indicator.className = 'active_tool_indicator';
        } else {
            var labels = { circle: 'Circle', underline: 'Underline', box: 'Box' };
            indicator.innerHTML = 'Tool selected: <b>' + labels[toolName] + '</b> — click a sentence in the letter.';
            indicator.className = 'active_tool_indicator tool_active_' + toolName;
        }
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var chunks = e.querySelectorAll('.letter_chunk');
        var totalChunks = chunks.length;
        var correctCount = 0;

        for (var i = 0; i < chunks.length; i++) {
            var chunkEl = chunks[i];
            chunkEl.classList.remove('chunk_correct', 'chunk_wrong');

            var expected = chunkEl.dataset.correct || ''; // '' يعني ما لازم ينعلّم عليه
            var applied = '';
            if (chunkEl.classList.contains('annot_circle')) { applied = 'circle'; }
            else if (chunkEl.classList.contains('annot_underline')) { applied = 'underline'; }
            else if (chunkEl.classList.contains('annot_box')) { applied = 'box'; }

            var isMatch = (expected === applied);

            if (isMatch) {
                correctCount++;
                if (expected !== '') {
                    // نعطي إشارة خفيفة إنو هاد الجزء صح (بس إذا كان أصلاً المفروض ينعلّم)
                    chunkEl.classList.add('chunk_correct');
                }
            } else {
                chunkEl.classList.add('chunk_wrong');
            }
        }

        var allCorrect = (correctCount === totalChunks);
        showFeedback(true, allCorrect);

        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add('disabled');
        }
    },
    reset:function(){
        var ob = this.ob;
        var e = (ob.activity_area);

        var chunks = e.querySelectorAll('.letter_chunk');
        for (var i = 0; i < chunks.length; i++) {
            chunks[i].classList.remove('annot_circle', 'annot_underline', 'annot_box', 'chunk_correct', 'chunk_wrong');
        }

        var toolBtns = e.querySelectorAll('.tool_btn');
        for (var b = 0; b < toolBtns.length; b++) {
            toolBtns[b].classList.remove('active_tool');
        }
        ob.currentTool = null;
        this.updateToolIndicator(ob, null);

        if (document.getElementsByClassName('checkBtn')[0] != undefined) {
            document.getElementsByClassName('checkBtn')[0].classList.add('disabled');
        }
        if (document.getElementsByClassName('resetBtn')[0] != undefined) {
            document.getElementsByClassName('resetBtn')[0].classList.add('disabled');
        }
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}