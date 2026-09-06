// build-completeit.js — بناء الـ HTML بس (البودي)
function buildCompleteItBody(aObj) {
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
				htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + ';">';
			}
			htmlStmt += '</div>';
		htmlStmt += '</div>';

		htmlStmt += '<div class="activityHeading">'
			htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
			if(aObj.title_position !=undefined && aObj.title_position =="under"){
				htmlStmt += "<div class='page_sub_title'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
						htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					}
					htmlStmt += "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
			}else {
				htmlStmt += "<div class='page_sub_title d-flex'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
						htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					}
					htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
			}
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';
		// ===================================================================== heading =====================

    // options
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt += '<div class="all_cont">';
    htmlStmt += '<div class="ci-wrap">';

        // صندوق الكلمات
        htmlStmt += '<div class="ci-wordbox">';
        for (var w = 0; w < aObj.wordBank.length; w++) {
            htmlStmt += '<span class="ci-word-chip">' + aObj.wordBank[w] + '</span>';
        }
        htmlStmt += '</div>';

        // النص المتواصل مع الفراغات
        htmlStmt += '<div class="ci-paragraph">';
        var parts = aObj.text.split('[_]');
        for (var p = 0; p < parts.length; p++) {
            htmlStmt += '<span>' + parts[p] + '</span>';
            if (p < parts.length - 1) {
                htmlStmt += '<input type="text" class="ci-input" id="ci-input-' + p + '" data-index="' + p + '" autocomplete="off" spellcheck="false"/>';
            }
        }
        htmlStmt += '</div>'; // end ci-paragraph

    htmlStmt += '</div>'; // end ci-wrap
    htmlStmt += '</div>'; // end all_cont
    htmlStmt += '</div>'; // end options

    $('.activity_area').append(htmlStmt);

    // ملاحظة: ما منعمل هون new CompleteIt(...) - النظام العام (activities.js)
    // هو يلي بينشئها لما يشوف aActTyp == 'completeit':
    //   theActivity = new CompleteIt(quePart, completeit_data);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}