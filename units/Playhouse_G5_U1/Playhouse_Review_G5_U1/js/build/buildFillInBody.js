function buildFillInBody(aObj) {	
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){		
       
		var layOut = parseInt(aObj.layout);
        var currentQue = 1;			
		
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
        // ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont d-flex flex-column justify-content-start justify-content-sm-center">';
		// options
		if (typeof aObj.options != undefined && aObj.options != null) {
			if (aObj.options.length > 0) {
				htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';
				htmlStmt += '<div class="word_options d-flex flex-wrap justify-content-around">';
				jQuery.each(aObj.options, function (key, value) {
				htmlStmt += '<div class="audioIcon off d-flex contant" data-audio="'+aObj.optionsAudios[key]+'">' ;
					htmlStmt += '<div class="clue_word">' + value + '</div>';
				htmlStmt += '</div>';
				});
				htmlStmt += '</div>';
				htmlStmt += '</div>';
			}
		}
		// ======
		htmlStmt += '<div class="screen_elements h-100 d-flex flex-wrap">';
		htmlStmt += '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

			if(aObj.image != 'no' && aObj.image != ""){
				if(aObj.imageposition == 'front'){
					htmlStmt += '<div class="img_space"><img src="'+aObj.image+'"></img></div>';
				}
			}

			if(layOut == 2){
				// ============================================================= //
				// layout 2: عدة جداول جنب بعض. كل جدول إله عمود "كلمة" ثابت
				// وعمود تاني fill-in. الترقيم (fieldIndex/currentQue) بيكمل
				// عبر كل الجداول عشان questions[] و validate() يضلوا شغالين
				// عادي بدون أي تعديل على fillin.js.
				// ============================================================= //
				htmlStmt += '<div class="fillin_gr d-flex flex-wrap justify-content-center">';

				fieldIndex = 0;
				for(let t = 0; t < aObj.tables.length; t++){
					var tblObj = aObj.tables[t];

					htmlStmt += '<div class="q_space fillin_table_group mx-2">';
					htmlStmt += '<table>';
						htmlStmt += '<tr>';
						for(let h = 0; h < tblObj.headings.length; h++){
							htmlStmt += '<th class="">';
								htmlStmt += '<div class="off d-flex text-wrap Box contant min_w_fit_contant">';
								htmlStmt += '<span class="audioIcon" data-audio="' + tblObj.headingsAudio[h] + '">' + tblObj.headings[h] + '</span>';
								htmlStmt += '</div>';
							htmlStmt += '</th>';
						}
						htmlStmt += '</tr>';

						for(let r = 0; r < tblObj.rows.length; r++){
							htmlStmt += '<tr>';

								// العمود الأول: الكلمة نفسها، ثابتة مش قابلة للتعديل
								htmlStmt += '<td>';
									htmlStmt += '<div class="off d-flex contant word_cell Box">' + tblObj.rows[r].word + '</div>';
								htmlStmt += '</td>';

								// العمود الثاني: خانة fill-in
								htmlStmt += '<td>';
									htmlStmt += '<div class="que img_fillin_gr d-flex flex-wrap flex-sm-nowrap" data-qno="' + (fieldIndex + 1) + '">';
										htmlStmt += '<div class="fillin_set Box">';
											htmlStmt += '<input class="text_input_area" type="text" maxlength="' + (aObj.questions)[fieldIndex].maxlength + '" data-type="' + (aObj.questions)[fieldIndex].type + '">';
											htmlStmt += '<div class="icon_wrap">';
											htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
											htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
											htmlStmt += '</div>';// - end  icon_wrap
										htmlStmt += '</div>';
									htmlStmt += '</div>'; //end que

									fieldIndex++;
								htmlStmt += '</td>';

							htmlStmt += '</tr>';
						}
					htmlStmt += '</table>';
					htmlStmt += '</div>'; // - /fillin_table_group
				}

				htmlStmt += '</div>'; // - /fillin_gr
			}else{
				// ============================================================= //
				// layout 1: السلوك الأصلي متل ما هو، بدون أي تغيير.
				// ============================================================= //
				var headings = (aObj.headings).length;
				var numOfRow = aObj.numOfRow;

				htmlStmt += '<div class="fillin_gr d-flex align-items-center">';
				htmlStmt += '<div class="q_space w-100">';

					htmlStmt += '<table>';
						htmlStmt += '<tr>';
						for (x = 0; x < headings; x++) {
						htmlStmt += '<th class="">';
							htmlStmt += '<div class="off d-flex text-wrap Box contant min_w_fit_contant">';
							htmlStmt += '<span class="audioIcon"  data-audio="' + aObj.headingsAudio[x] + '">'+aObj.headings[x]+'</span>';
							htmlStmt += '</div>'
						htmlStmt += '</th>';
						}
						htmlStmt += '</tr>';
						htmlStmt += '<tr>';

						// Loop of columns
						fieldIndex = 0;
						for(let col=0; col<numOfRow.length; col++){
						htmlStmt += '<td>';

							//loop of rows
							for(let row=0; row < numOfRow[col]; row++){
							htmlStmt += '<div class="que img_fillin_gr d-flex flex-wrap flex-sm-nowrap" data-qno="' + (fieldIndex + 1) + '">';

								htmlStmt += '<div class="fillin_set Box">';
								if (aObj.defaultAnswer.includes(fieldIndex+1)) {
									htmlStmt += '<input type="text" maxlength="1" readonly value="' + ((aObj.questions)[fieldIndex]).answer[0] + '"/>'
									htmlStmt += '<div class="icon_wrap">';
									htmlStmt += '<div class="tick"><img src=""></div>';
									htmlStmt += '<div class="cross"><img src=""></div>';
									htmlStmt += '</div>';// - end  icon_wrap
								}else{
									htmlStmt += '<input class="text_input_area" type="text" maxlength="' + (aObj.questions)[fieldIndex].maxlength + '" data-type="' + (aObj.questions)[fieldIndex].type + '">';

									htmlStmt += '<div class="icon_wrap">';
									htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
									htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
									htmlStmt += '</div>';// - end  icon_wrap
								}
								htmlStmt += '</div>';

							htmlStmt += '</div>'; //end que

							fieldIndex++;
							}
						htmlStmt += '</td>';
						}
						htmlStmt += '</tr>';

					htmlStmt += '</table>';
				htmlStmt += '</div></div>';
			}

		htmlStmt += '</div>';
		htmlStmt += '</div></div></div>'; // end - all_cont / options 

	}

	console.log('htmlStmt >> fillin Built');
	$( ".activity_area" ).append( htmlStmt );	
	
	setLoadedStatus(getCurrFileOrDirectory('file'));
}
function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}