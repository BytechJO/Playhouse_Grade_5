// build-writeit.js — بناء الـ HTML بس (البودي)
function buildWriteItBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj === 'undefined' || aObj === null) return;

  
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
					htmlStmt += " <p> " + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';

        // =====================================================================
    // options
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt += '<div class="all_cont">';
    htmlStmt += '<table class="wi-table">';
        htmlStmt += '<tr>';
            htmlStmt += '<th class="wi-th-word">Word</th>';
            htmlStmt += '<th class="wi-th-homonym">Homonym</th>';
            htmlStmt += '<th class="wi-th-sentence">Sentence</th>';
        htmlStmt += '</tr>';

        for (var q = 0; q < aObj.questions.length; q++) {
            var qData = aObj.questions[q];
            var qNum = q + 1;

            htmlStmt += '<tr class="wi-que" id="wi-que-' + qNum + '" data-qno="' + qNum + '">';
                htmlStmt += '<td class="wi-word-cell">' + qData.word + '</td>';
                htmlStmt += '<td class="wi-homonym-cell">';
                    htmlStmt += '<input type="text" class="wi-homonym-input" id="wi-homonym-' + qNum + '" autocomplete="off" spellcheck="false"/>';
                htmlStmt += '</td>';
                htmlStmt += '<td class="wi-sentence-cell">';
                    htmlStmt += '<input type="text" class="wi-sentence-input" id="wi-sentence-' + qNum + '" autocomplete="off" spellcheck="false"/>';
                    htmlStmt += '<div class="icon_wrap">';
                        htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
                        htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
                    htmlStmt += '</div>';
                htmlStmt += '</td>';
            htmlStmt += '</tr>';
        }

    htmlStmt += '</table>';
    htmlStmt += '</div>'; // end all_cont
    htmlStmt += '</div>'; // end options

    $('.activity_area').append(htmlStmt);

    // ملاحظة: ما منعمل هون new WriteIt(...) - النظام العام (activities.js)
    // هو يلي بينشئها لما يشوف aActTyp == 'writeit':
    //   theActivity = new WriteIt(quePart, writeit_data);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}