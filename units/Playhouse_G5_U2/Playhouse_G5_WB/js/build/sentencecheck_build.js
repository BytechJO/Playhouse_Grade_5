//  ****************************************** //
//  SentenceCheck - Version no: 1
//  نشاط: "Write it! هل الجملة صح؟" - صندوق اختيار صح/خطأ +
//  خط لإعادة كتابة الجملة الغلط.
//  ****************************************** //
function buildSentenceCheckBody(aObj) {
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
			if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
				htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + ';">';
			}
			htmlStmt += '</div>';
		htmlStmt += '</div>';

		htmlStmt += '<div class="activityHeading">';
			htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-audio="' + aObj.subTitleAudio + '">';
			htmlStmt += "<div class='page_sub_title'>";
				htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
				htmlStmt += "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
			htmlStmt += "</div>";
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';

		// ===================================================================== questions =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont d-flex flex-column justify-content-start justify-content-sm-center">';
		htmlStmt += '<div class="screen_elements h-100 d-flex flex-wrap">';
		htmlStmt += '<div class="sentencecheck_gr d-flex flex-column w-100">';

		for (let q = 0; q < aObj.questions.length; q++) {
			var tmpObj = aObj.questions[q];

			htmlStmt += '<div class="que sentencecheck_row d-flex flex-column" data-qno="' + (q + 1) + '">';

				htmlStmt += '<div class="d-flex align-items-start">';

					htmlStmt += '<div class="sc_num">' + (q + 1) + '</div>';

					// صندوق الاختيار صح / خطأ - عنصر واحد بيتبدل حالته بالكليك
					htmlStmt += '<div class="sc_toggle_box" data-value="">';
						htmlStmt += '<img class="sc_toggle_icon" src="" style="display:none;">';
					htmlStmt += '</div>';

					// نص الجملة
					htmlStmt += '<div class="audioIcon off d-flex contant sc_sentence" data-audio="' + tmpObj.sentenceAudio + '">';
						htmlStmt += tmpObj.sentence;
					htmlStmt += '</div>';

					htmlStmt += '<div class="icon_wrap">';
						htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
						htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
					htmlStmt += '</div>';

				htmlStmt += '</div>'; // - /d-flex align-items-start

				// خط إعادة كتابة الجملة
				htmlStmt += '<div class="sc_rewrite_line">';
					htmlStmt += '<input class="text_input_area sc_rewrite_input" type="text" maxlength="' + tmpObj.maxlength + '">';
				htmlStmt += '</div>';

			htmlStmt += '</div>'; // - /que sentencecheck_row
		}

		htmlStmt += '</div>'; // - /sentencecheck_gr
		htmlStmt += '</div></div></div>'; // - /screen_elements /all_cont /options

	}

	console.log('htmlStmt >> sentencecheck Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}