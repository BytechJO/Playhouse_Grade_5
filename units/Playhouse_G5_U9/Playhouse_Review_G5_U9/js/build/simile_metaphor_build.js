function buildSimileMetaphorBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj != undefined && aObj != null) {

        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1"><a href=""><img src="../images/icons/back_btn.png" /></a></div>';
        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1"><a href=""><img src="../images/icons/next_btn.png" /></a></div>';

        // ===== العنوان + التعليمة =====
        htmlStmt += '<div class="act_head_group justify-content-center">';
        htmlStmt +=   '<div class="audioIcon off contant" data-slideNum="1" data-audio="' + aObj.mainTitleAudio + '">';
        htmlStmt +=     '<div class="q-type-img-container">';
        htmlStmt +=       '<img class="mainTitle" src=' + aObj.mainTitle + '>';
        htmlStmt +=     '</div>';
        htmlStmt +=   '</div>';
        htmlStmt +=   '<div class="activityHeading simile_heading">';
        htmlStmt +=     '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="1" data-audio="' + aObj.subTitleAudio + '">';
        htmlStmt +=       "<div class='page_sub_title simile_title'>" + aObj.subTitleTextLeft + "</div>";
        htmlStmt +=     '</div>';
        htmlStmt +=     "<div class='simile_instruction'>" + aObj.instructionText + "</div>";
        htmlStmt +=   '</div>';
        htmlStmt += '</div>';

        // ===== منطقة النشاط =====
        htmlStmt += '<div class="options simile_wrap">';

        // -- صف الصور الكبيرة فوق (lion, feather) --
        htmlStmt += '<div class="simile_top_images d-flex">';
        for (var t = 0; t < aObj.topImages.length; t++) {
            htmlStmt += '<div class="simile_img_box simile_img_top">';
            htmlStmt +=   '<img src="' + aObj.topImages[t].src + '" alt="' + (aObj.topImages[t].alt || '') + '" />';
            htmlStmt += '</div>';
        }
        htmlStmt += '</div>';

        // -- الصف الأوسط: الأسئلة يسار + الصور الجانبية يمين --
        htmlStmt += '<div class="simile_content d-flex">';

        htmlStmt +=   '<div class="simile_questions">';
        for (var q = 0; q < aObj.questions.length; q++) {
            var qData = aObj.questions[q];
            var qHtml = qData.text.replace(
                /\[_]/g,
                '<input class="text_input_area" type="text" maxlength="' + qData.maxlength +
                '" data-type="' + qData.type + '" autocomplete="off" />'
            );

            htmlStmt += '<div class="que simile_que d-flex align-items-center" data-qno="' + (q + 1) + '">';
            htmlStmt +=   '<div class="simile_que_text">' + qHtml + '</div>';
            htmlStmt +=   '<div class="icon_wrap_holder">';
            htmlStmt +=     '<div class="icon_wrap">';
            htmlStmt +=       '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
            htmlStmt +=       '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
            htmlStmt +=     '</div>';
            htmlStmt +=   '</div>';
            htmlStmt += '</div>';
        }
        htmlStmt +=   '</div>'; // end simile_questions

        htmlStmt +=   '<div class="simile_side_images">';
        for (var s = 0; s < aObj.sideImages.length; s++) {
            htmlStmt += '<div class="simile_img_box simile_img_side">';
            htmlStmt +=   '<img src="' + aObj.sideImages[s].src + '" alt="' + (aObj.sideImages[s].alt || '') + '" />';
            htmlStmt += '</div>';
        }
        htmlStmt +=   '</div>'; // end simile_side_images

        htmlStmt += '</div>'; // end simile_content

        // -- صف الصور تحت (diamond, water drop) --
        htmlStmt += '<div class="simile_bottom_images d-flex">';
        for (var b = 0; b < aObj.bottomImages.length; b++) {
            htmlStmt += '<div class="simile_img_box simile_img_bottom">';
            htmlStmt +=   '<img src="' + aObj.bottomImages[b].src + '" alt="' + (aObj.bottomImages[b].alt || '') + '" />';
            htmlStmt += '</div>';
        }
        htmlStmt += '</div>';

        htmlStmt += '</div>'; // end options

        $(".activity_area").append(htmlStmt);
        setLoadedStatus(getCurrFileOrDirectory('file'));
    }
}