// build-spotit.js — بناء الـ HTML بس (البودي)
function buildSpotItBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj === 'undefined' || aObj === null) return;

    var wordId = 0; // معرّف فريد لكل كلمة/عبارة قابلة للنقر

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
    // options
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt += '<div class="all_cont">';
    htmlStmt += '<div class="si_wrap">';

        // الصور على اليمين
        htmlStmt += '<div class="si_images">';
        for (var im = 0; im < aObj.images.length; im++) {
            htmlStmt += '<img src="' + aObj.images[im] + '" class="si_char_img si_char_' + (im + 1) + '"/>';
        }
        htmlStmt += '</div>';

        // الحوار
        htmlStmt += '<div class="si_dialogue">';
        for (var l = 0; l < aObj.lines.length; l++) {
            var line = aObj.lines[l];
            htmlStmt += '<div class="si_line">';
                htmlStmt += '<span class="si_speaker">' + line.speaker + ':</span>';
                htmlStmt += '<span class="si_text">';

                // تقسيم النص حسب [[...]] - العبارات المستهدفة (الصحيحة)
                var parts = line.text.split(/(\[\[[^\]]+\]\])/g);
                for (var p = 0; p < parts.length; p++) {
                    var part = parts[p];
                    if (part === '') continue;

                    var isTarget = /^\[\[[^\]]+\]\]$/.test(part);
                    if (isTarget) {
                        var phrase = part.replace(/^\[\[|\]\]$/g, '');
                        wordId++;
                        htmlStmt += '<span class="si_word" id="si_word_' + wordId + '" data-target="true">' + phrase + '</span> ';
                    } else {
                        // كل كلمة عادية بره الأقواس بتصير كمان قابلة للنقر (غلط لو انحوّطت)
                        var plainWords = part.trim().split(/\s+/).filter(function(w){ return w !== ''; });
                        for (var w = 0; w < plainWords.length; w++) {
                            wordId++;
                            htmlStmt += '<span class="si_word" id="si_word_' + wordId + '" data-target="false">' + plainWords[w] + '</span> ';
                        }
                    }
                }

                htmlStmt += '</span>';
            htmlStmt += '</div>'; // end si_line
        }
        htmlStmt += '</div>'; // end si_dialogue

    htmlStmt += '</div>'; // end si_wrap
    htmlStmt += '</div>'; // end all_cont
    htmlStmt += '</div>'; // end options

    $('.activity_area').append(htmlStmt);

    // ملاحظة: ما منعمل هون new SpotIt(...) - النظام العام (activities.js)
    // هو يلي بينشئها لما يشوف aActTyp == 'spotit':
    //   theActivity = new SpotIt(quePart, spotit_data);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}