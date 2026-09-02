function buildFindItVerbObjectBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj != undefined && aObj != null) {

        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1"><a href=""><img src="../images/icons/back_btn.png" /></a></div>';
        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1"><a href=""><img src="../images/icons/next_btn.png" /></a></div>';

        htmlStmt += '<div class="options find_it_vo_wrap">';

        // ============================== الرأس ==============================
   htmlStmt += '<div class="act_head_group justify-content-center">';
            htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
                htmlStmt += '<div class="q-type-img-container">';
                htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
                if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
                    htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + ';">';
                }
                htmlStmt += '</div>';
            htmlStmt += '</div>';

            htmlStmt += '<div class="activityHeading">'
                htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
                htmlStmt += "<div class='page_sub_title'>";
                    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
                    for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
                        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
                    }
                    htmlStmt += "<br><p class='subTitleTextRight'> " + aObj.subTitleTextRight + " </p>";
                htmlStmt += "</div>";
                htmlStmt += '</div>';
            htmlStmt += '</div>';
            htmlStmt += '</div>';


        // ============================== التولبار (اختيار الأداة) ==============================
        htmlStmt +=   '<div class="vo_container">';
        
        htmlStmt +=   '<div class="vo_toolbar d-flex">';
        for (var t = 0; t < aObj.tools.length; t++) {
            var tool = aObj.tools[t];
            htmlStmt += '<div class="vo_tool_btn tool_btn tool_' + tool.style + '" data-tool="' + tool.style + '">';
            htmlStmt +=   '<span class="tool_icon"></span>';
            htmlStmt +=   '<span class="tool_label">' + tool.label + '</span>';
            htmlStmt += '</div>';
        }
        htmlStmt +=   '</div>';

        htmlStmt +=   '<div class="active_tool_indicator">Choose a tool above, then click a word in the sentence.</div>';

        // ============================== صندوق الجمل (عمودين) ==============================
        htmlStmt +=   '<div class="vo_sentence_box">';
        htmlStmt +=     '<div class="vo_columns d-flex">';

        var half = Math.ceil(aObj.sentences.length / 2);

        for (var col = 0; col < 2; col++) {
            htmlStmt += '<div class="vo_col">';
            var startIdx = (col === 0) ? 0 : half;
            var endIdx   = (col === 0) ? half : aObj.sentences.length;

            for (var s = startIdx; s < endIdx; s++) {
                var chunks = aObj.sentences[s];
                htmlStmt += '<div class="vo_sentence_row d-flex" data-sidx="' + s + '">';
                htmlStmt +=   '<span class="vo_num">' + (s + 1) + '</span>';
                htmlStmt +=   '<span class="vo_sentence_text">';
                for (var c = 0; c < chunks.length; c++) {
                    var chunk = chunks[c];
                    var correctAttr = (chunk.correctStyle != undefined && chunk.correctStyle != null) ? chunk.correctStyle : '';
                    htmlStmt += '<span class="letter_chunk" data-sidx="' + s + '" data-cidx="' + c + '" data-correct="' + correctAttr + '">';
                    htmlStmt +=   chunk.text;
                    htmlStmt += '</span> ';
                }
                htmlStmt +=   '</span>';
                htmlStmt += '</div>';
            }

            htmlStmt += '</div>'; // end vo_col
        }

        htmlStmt +=     '</div>'; // end vo_columns
        htmlStmt +=   '</div>'; // end vo_sentence_box
        htmlStmt +=   '</div>'; // end vo_container

        htmlStmt += '</div>'; // end find_it_vo_wrap

        $(".activity_area").append(htmlStmt);
        setLoadedStatus(getCurrFileOrDirectory('file'));
    }
}