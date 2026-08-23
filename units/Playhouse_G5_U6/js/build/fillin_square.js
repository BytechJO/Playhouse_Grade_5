function buildWordSearchBody(aObj) {
    var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null && aObj != {}){

        htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
		htmlStmt +=  '<a href="">'
		htmlStmt +=  '<img src="../images/icons/back_btn.png" />'
		htmlStmt +=  '</a>'
		htmlStmt +=  '</div>'
		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
		htmlStmt +=  '<a href="">'
		htmlStmt +=  '<img src="../images/icons/next_btn.png" />'
		htmlStmt +=  '</a>'
		htmlStmt +=  '</div>'
		// ===================================================================== heading =====================
		htmlStmt += '<div class="act_head_group justify-content-center">';
			htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
				htmlStmt += '<div class="q-type-img-container">';
				htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
				if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
					htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + '">';
				}
				htmlStmt += '</div>';
			htmlStmt += '</div>';

			htmlStmt += '<div class="activityHeading">'
				htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
				htmlStmt += "<div class='page_sub_title d-flex'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
						htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					}
					htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		// ===================================================================== all_cont =====================

        htmlStmt += '<div class="options cont_ht_sf d-flex flex-wrap">'; 
        htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';
        htmlStmt += '<div class="wordsearch_wrap d-flex align-items-center">'; 
		htmlStmt += '<div class="wordlist"></div>';
		 htmlStmt += '<div class="word-container">'
		
        htmlStmt += '<div class="wordmatrix_holder">';
        htmlStmt += '<div class="wordmatrix"></div>';
        htmlStmt += '</div>';// end - wordmatrix_holder
        
        // ============================================================
        // "Write the antonyms on the lines" — one blank line per word.
        // These are auto-filled (readonly) by WordSearch.js the moment
        // the matching word is found correctly in the grid; the student
        // does not type into them.
        // ============================================================
        var wsWords = ((aObj.questions)[0]).words;
        if (wsWords != undefined && wsWords.length > 0) {
            htmlStmt += '<div class="write_answers">';
            for (var wr = 0; wr < wsWords.length; wr++) {
                htmlStmt += '<div class="write_line_wrap">';
                htmlStmt += '<input type="text" class="write_line" id="write_' + (wr + 1) + '" data-windex="' + (wr + 1) + '" readonly>';
                htmlStmt += '</div>';
            }
            htmlStmt += '</div>';// end - write_answers
        }
        htmlStmt += '</div>';// end - word-container


        htmlStmt += '</div>';// end - wordsearch_wrap
        htmlStmt += '</div>';// end - all_cont
        htmlStmt += '<div class="wordlist_but">WORDS</div>';
        htmlStmt += '</div>';// end - options
        $( ".activity_area" ).append( htmlStmt );
        setLoadedStatus(getCurrFileOrDirectory('file')); 
    }
}