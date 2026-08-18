function buildReadAboutBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj != undefined && aObj != null) {

        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/back_btn.png" /></a>';
        htmlStmt += '</div>';
        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/next_btn.png" /></a>';
        htmlStmt += '</div>';

        // ===================================================================== heading =====================
        htmlStmt += '<div class="act_head_group justify-content-center">';
        htmlStmt += '<div class="audioIcon off contant" data-audio="' + aObj.mainTitleAudio + '">';
        htmlStmt += '<div class="q-type-img-container">';
        htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
        htmlStmt += '</div>';
        htmlStmt += '</div>';

        htmlStmt += '<div class="activityHeading">';
        htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-audio="' + aObj.subTitleAudio + '">';
        htmlStmt += "<div class='page_sub_title'><p>" + aObj.subTitleTextLeft + "</p></div>";
        htmlStmt += '</div>';
        htmlStmt += '</div>';
        htmlStmt += '</div>';

        // ===================================================================== options =====================
        htmlStmt += '<div class="options cont_ht_sf mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';
        htmlStmt += '<div class="rb_wrap">';

        // ---- cloud (static, read-only — no circle/underline interaction) ----
        htmlStmt += '<div class="cloud_wrap">';
        htmlStmt += '<svg class="cloud_svg" viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">';
        htmlStmt += '<path d="M120,180 C60,180 40,120 90,100 C70,50 140,20 190,45 C210,10 280,5 310,40 C350,10 430,15 450,55 C500,30 570,55 570,100 C620,90 650,140 610,175 C650,200 630,250 580,245 C580,280 520,290 490,265 C470,300 400,300 380,270 C340,300 270,295 250,265 C210,290 150,280 150,245 C100,250 80,210 120,180 Z" fill="#ffffff" stroke="#333333" stroke-width="2"/>';
        htmlStmt += '</svg>';
        htmlStmt += '<div class="cloud_text">';
        htmlStmt += '<div class="cloud_title">' + aObj.cloudTitle + '</div>';
        htmlStmt += '<div class="cloud_body">';
        for (var s = 0; s < aObj.cloudSentences.length; s++) {
            htmlStmt += '<span class="cloud_sentence" data-sentence-index="' + s + '">' + aObj.cloudSentences[s] + '</span> ';
        }
        htmlStmt += '</div>'; // end - cloud_body
        htmlStmt += '</div>'; // end - cloud_text
        htmlStmt += '</div>'; // end - cloud_wrap

        // ---- connecting lines + free-text boxes ----
        htmlStmt += '<div class="rb_connector rb_connector_left"></div>';
        htmlStmt += '<div class="rb_connector rb_connector_right"></div>';
        htmlStmt += '<div class="rb_connector rb_connector_bottom"></div>';

        htmlStmt += '<div class="rb_box rb_box_left"><textarea class="rb_input" rows="3"></textarea></div>';
        htmlStmt += '<div class="rb_box rb_box_right"><textarea class="rb_input" rows="3"></textarea></div>';

        htmlStmt += '<div class="rb_label_bottom">Supporting Sentences</div>';
        htmlStmt += '<div class="rb_box rb_box_bottom"><textarea class="rb_input" rows="3"></textarea></div>';

        htmlStmt += '</div>'; // end - rb_wrap
        htmlStmt += '</div>'; // end - all_cont
        htmlStmt += '</div>'; // end - options

        $(".activity_area").append(htmlStmt);
        setLoadedStatus(getCurrFileOrDirectory('file'));
    }
}