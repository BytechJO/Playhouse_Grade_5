//  ****************************************** //
//  ReadPassages - build file
//  Produces the SAME .que / .pick / .icon_wrap structure that MCQ.js
//  already knows how to drive (click-to-select, validate, reset) - so
//  no new activity class is needed. Only the visual content of each
//  .pick (a full passage + portrait) is new.
//  ****************************************** //
function buildReadPassagesBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj != undefined && aObj != null) {

      
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

        // ---------------- options / passages ----------------
        htmlStmt += '<div class="options mx-auto">';
        htmlStmt += '<div class="all_cont">';
        htmlStmt += '<div class="rp_passage_list">';

        var q = aObj.questions[0];
        htmlStmt += '<div class="que" id="que_1" data-qno="1">';
        jQuery.each(q.options, function (i, opt) {
            var picId = 'pick_1_' + (i + 1);
            htmlStmt += '<div id="' + picId + '" class="pick rp_passage">';
            htmlStmt += '<div class="rp_passage_inner rp_img_' + (opt.imagePosition || 'left') + '">';
            if (opt.image) {
                htmlStmt += '<img class="rp_portrait rp_portrait_' + (opt.imageShape || 'rect') + '" src="' + opt.image + '">';
            }
            htmlStmt += '<div class="rp_passage_text txt background_audio">' + opt.text + '</div>';
            htmlStmt += '</div>'; // rp_passage_inner

            // tickbox mark (MCQ.js shows this on click when shape == 'tickbox')
            htmlStmt += '<div class="selectTick rp_tick_mark">&#10003;</div>';

            htmlStmt += '<div class="icon_wrap">';
            htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
            htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
            htmlStmt += '</div>'; // icon_wrap

            htmlStmt += '</div>'; // pick
        });
        htmlStmt += '</div>'; // que

        htmlStmt += '</div>'; // rp_passage_list
        htmlStmt += '</div>'; // all_cont
        htmlStmt += '</div>'; // options
    }

    console.log('htmlStmt >> ReadPassages Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}