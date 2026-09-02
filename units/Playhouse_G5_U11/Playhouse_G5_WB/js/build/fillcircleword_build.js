//  ****************************************** //
//  FillCircleWord - build file
//  A blank input ("good"/"well") + one clickable circle target word
//  (the noun/verb it modifies), flowing naturally inside each sentence.
//  ****************************************** //
function buildFillCircleWordBody(aObj) {
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){

		var numOfQuestions = (aObj.questions).length;

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

		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';

		htmlStmt += '<div class="screen_elements d-flex justify-content-center align-items-start h-100">';
		htmlStmt += '<div class="group_elm fcw_group d-flex flex-wrap">';

			for (var x = 0; x < numOfQuestions; x++) {
				var qObj = aObj.questions[x];

				htmlStmt += '<div class="que fcw_item d-flex align-items-start" data-qno="' + (x + 1) + '">';

					htmlStmt += '<div class="q_num_space">' + (x + 1) + '</div>';

					htmlStmt += '<div class="fcw_sentence d-flex flex-wrap align-items-center">';
					for (var w = 0; w < qObj.words.length; w++) {
						var wordObj = qObj.words[w];

						if(wordObj.type == 'blank'){
							htmlStmt += '<input class="text_input_area fcw_input" type="text" maxlength="' + aObj.maxlength + '" data-widx="' + w + '">';
						}else if(wordObj.type == 'circle'){
							htmlStmt += '<div class="fcw_wordWrap" data-widx="' + w + '">';
								htmlStmt += '<span class="fcw_word">' + wordObj.text + '</span>';
								htmlStmt += '<svg class="fcw_svg" viewBox="0 0 100 40"></svg>';
							htmlStmt += '</div>';
						}else{
							htmlStmt += '<div class="fcw_plainWord">' + wordObj.text + '</div>';
						}
					}
					htmlStmt += '</div>'; // - end fcw_sentence

					htmlStmt += '<div class="icon_wrap_holder">';
					htmlStmt += '<div class="icon_wrap">';
					htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
					htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
					htmlStmt += '</div></div>';

				htmlStmt += '</div>'; // - end que / fcw_item
			}

		htmlStmt += '</div>'; // - end group_elm
		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> fillcircleword Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}