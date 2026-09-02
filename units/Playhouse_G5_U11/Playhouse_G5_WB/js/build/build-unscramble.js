// build-unscramble.js — بناء الـ HTML بس (البودي)
function buildUnscrambleBody(aObj) {
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
    htmlStmt += '<div class="unscr-wrap">';

    for (var q = 0; q < aObj.questions.length; q++) {
        var qData = aObj.questions[q];
        var qNum = q + 1;

        htmlStmt += '<div class="unscr-que" id="unscr-que-' + qNum + '" data-qno="' + qNum + '">';
            htmlStmt += '<div class="unscr-row">';
                htmlStmt += '<span class="unscr-num">' + qNum + '</span>';
                htmlStmt += '<span class="unscr-scrambled">' + qData.scrambled + '</span>';
                htmlStmt += '<input type="text" class="unscr-input" id="unscr-input-' + qNum + '" autocomplete="off" spellcheck="false"/>';
                htmlStmt += '<div class="icon_wrap">';
                    htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
                    htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
                htmlStmt += '</div>';
            htmlStmt += '</div>'; // end unscr-row

            // منطقة الكلمات القابلة للنقر - بتتبنى تلقائيًا وقت الكتابة
            htmlStmt += '<div class="unscr-words" id="unscr-words-' + qNum + '"></div>';

        htmlStmt += '</div>'; // end unscr-que
    }

    htmlStmt += '</div>'; // end unscr-wrap
    htmlStmt += '</div>'; // end all_cont
    htmlStmt += '</div>'; // end options

    $('.activity_area').append(htmlStmt);

    // ملاحظة: ما منعمل هون new UnscrambleIt(...) - النظام العام (activities.js)
    // هو يلي بينشئها لما يشوف aActTyp == 'unscramble':
    //   theActivity = new UnscrambleIt(quePart, unscramble_data);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}