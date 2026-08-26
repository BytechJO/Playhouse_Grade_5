//  ****************************************** //
//  ReverseBingo - Version no: 2
//  اللوجيك/المنطق الخاص بلعبة "Reverse Bingo" التفاعلية
//  (اختيار كلمة من البنك، وضعها بخانة، شطب خانة، فحص فوز 4 متتاليين)
//  بنفس نمط باقي الأنشطة (FillIn / MCQ / WordSearch)
//  ****************************************** //
window.ReverseBingoController = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    this.settings = {
        'activity_area': ob[0],
        'data_obj': dataObj,
        'parent_holder': obj[0]
    };
    this.init(this.settings);
}

ReverseBingoController.prototype = {

    init: function (ob) {
        this.ob = ob;
        this.gridSize = (ob.data_obj.gridSize) ? ob.data_obj.gridSize : 5;
        this.centerIndex = Math.floor((this.gridSize * this.gridSize) / 2);
        this.armedWord = null; // الكلمة المختارة حاليًا من البنك، جاهزة للوضع بخانة
        this.listen(ob);
    },

    listen: function (ob) {
        var self = this;
        var $area = $(ob.activity_area);

        // اختيار كلمة من البنك (تسليحها)
        $area.find('.rb_word_chip').on('click', function () {
            if ($(this).hasClass('used')) return;

            $area.find('.rb_word_chip').removeClass('armed');
            if (self.armedWord === $(this).data('word')) {
                self.armedWord = null; // كبست عليها مرتين -> إلغاء التسليح
            } else {
                self.armedWord = $(this).data('word');
                $(this).addClass('armed');
            }
        });

        // كبس على خانة بالشبكة
        $area.find('.rb_cell').on('click', function () {
            var $cell = $(this);

            if ($cell.hasClass('rb_center')) return; // الخانة الوسطى ثابتة

            if ($cell.text().trim() === '') {
                // خانة فاضية: إذا في كلمة مسلّحة، ضعها هون
                if (self.armedWord) {
                    $cell.text(self.armedWord);
                    $area.find('.rb_word_chip[data-word="' + self.armedWord + '"]').addClass('used').removeClass('armed');
                    self.armedWord = null;
                }
            } else {
                // خانة معبّية: بدّل حالة الشطب (Cross out)
                $cell.toggleClass('crossed');
                self.checkBingo();
            }
        });

        // زر إعادة الضبط
        $area.find('.rb_reset_btn').on('click', function () {
            self.reset();
        });
    },

    checkBingo: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);
        var n = this.gridSize;
        var crossed = [];
        $area.find('.rb_cell').each(function () {
            crossed[parseInt($(this).data('index'))] = $(this).hasClass('crossed');
        });

        var win = false;

        // فحص أفقي وعمودي: 4 متتاليين بأي مكان بالسطر/العمود
        for (var r = 0; r < n && !win; r++) {
            for (var c = 0; c <= n - 4 && !win; c++) {
                var ok = true;
                for (var k = 0; k < 4; k++) {
                    if (!crossed[r * n + (c + k)]) { ok = false; break; }
                }
                if (ok) win = true;
            }
        }
        for (var c2 = 0; c2 < n && !win; c2++) {
            for (var r2 = 0; r2 <= n - 4 && !win; r2++) {
                var ok2 = true;
                for (var k2 = 0; k2 < 4; k2++) {
                    if (!crossed[(r2 + k2) * n + c2]) { ok2 = false; break; }
                }
                if (ok2) win = true;
            }
        }
        // فحص الأقطار (كلا الاتجاهين) بحثًا عن 4 متتاليين
        for (var r3 = 0; r3 <= n - 4 && !win; r3++) {
            for (var c3 = 0; c3 <= n - 4 && !win; c3++) {
                var ok3 = true, ok4 = true;
                for (var k3 = 0; k3 < 4; k3++) {
                    if (!crossed[(r3 + k3) * n + (c3 + k3)]) ok3 = false;
                    if (!crossed[(r3 + k3) * n + (c3 + 3 - k3)]) ok4 = false;
                }
                if (ok3 || ok4) win = true;
            }
        }

        if (win) {
            $area.find('.rb_bingo_banner').removeClass('d-none');
        } else {
            $area.find('.rb_bingo_banner').addClass('d-none');
        }
    },

    reset: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);
        $area.find('.rb_cell').not('.rb_center').text('').removeClass('crossed');
        $area.find('.rb_word_chip').removeClass('used armed');
        $area.find('.rb_bingo_banner').addClass('d-none');
        this.armedWord = null;
    },

    // مطلوبة من نظام الأنشطة العام (activities.js) - بتنستدعى تلقائيًا
    // أول ما الصفحة تخلص تحميل، بنفس نمط باقي الأنشطة (MCQ, FillIn, WordSearch)
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    },

    // هاي لعبة تفاعلية مستمرة، ما في "إجابة صح/غلط" نهائية بتتفحص بضغطة
    // زر - بس منحطها فاضية عشان نظام checkBtn العام ما يطلع Error لو
    // انضغط بالغلط وهاد النشاط هو النشاط الحالي المفعّل بالصفحة
    validate: function () {
        // ما في شي مطلوب هون - الفحص (الشطب) بيصير مباشرة بالكبسة عالخانة
    }
};