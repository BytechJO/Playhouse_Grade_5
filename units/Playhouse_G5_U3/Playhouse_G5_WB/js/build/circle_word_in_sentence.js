function buildMcqBody(aObj) {	
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){		
       
		var numOfQuestions = (aObj.questions).length;
		var numberofCols = parseInt(aObj.numberofcolumns);
		var numOfQinCol = Math.round(numOfQuestions/numberofCols);
		var currQueNum = 0;

		// ------------------------------------------------------------------ //
		// مقاس التصميم الأصلي يلي انبنت عليه إحداثيات top/left بالـ px
		// (نفس القيم يلي مضبوطة أصلاً بالـ CSS: img_space width:1062px,
		// question_group height:900px). ممكن تجاوزها من الداتا نفسها
		// عن طريق aObj.designWidth / aObj.designHeight لو احتجتوا.
		// ------------------------------------------------------------------ //
		var designWidth  = (aObj.designWidth  != undefined) ? aObj.designWidth  : 1062;
		var designHeight = (aObj.designHeight != undefined) ? aObj.designHeight : 900;
		
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
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont d-flex flex-column justify-content-start justify-content-sm-center">';

		htmlStmt += '<div class="top_Text d-flex flex-wrap">';
		if(aObj.topText != undefined && aObj.topText != "") {
			for(let x=0; x<aObj.topText.length; x++) {
				htmlStmt += '<div class="audioIcon off contant text_audio" data-audio="">';
					htmlStmt += '<span class="text">' + aObj.topText[x] + '</span>';
				htmlStmt += '</div>';
			}
		}
		htmlStmt += '</div>';


        htmlStmt += '<div class="q_container d-flex flex-wrap justify-content-center align-items-center mb-70">';

		// ------------------------------------------------------------------ //
		// أول منبني كل مجموعات الأسئلة (question_group) بمتغير لحاله،
		// عشان نقرر تحت وين نحطها: جوا img_space (نمط overlay فوق صورة)
		// أو برا متل السلوك الأصلي (نشاطات بدون صورة خلفية).
		// ------------------------------------------------------------------ //
		var questionGroupsHtml = '';
		var isOverlayMode = false;

		for(x= 0;x<numberofCols;x++){	
			questionGroupsHtml += '<div class="question_group d-flex flex-wrap">';			
			for(y= 0;y<numOfQinCol;y++){
				currQueNum++;
				var tpOb = (aObj.questions)[currQueNum -1];
				if(typeof tpOb != undefined && tpOb != null ){

					// ---------------------------------------------------- //
					// لو السؤال معه top/left، منحولها من px لنسبة مئوية
					// (%) نسبة لمقاس التصميم الأصلي، عشان تكبر/تصغر مع
					// الصورة صح مهما كان مقاس الشاشة.
					// ---------------------------------------------------- //
					var quePositionStyle = '';
					if (tpOb.top != undefined && tpOb.top !== '' && tpOb.left != undefined && tpOb.left !== '') {
						isOverlayMode = true;
						// var topPx  = parseFloat(tpOb.top);
						// var leftPx = parseFloat(tpOb.left);
						// var topPct  = ((topPx  / designHeight) * 100).toFixed(3) + '%';
						// var leftPct = ((leftPx / designWidth ) * 100).toFixed(3) + '%';
						quePositionStyle = 'top:' + tpOb.top + ';left:' + tpOb.left + ';';
					}

					questionGroupsHtml += '<div class="que " id="que_'+currQueNum+'" data-qno="'+currQueNum+'" style="'+quePositionStyle+'">';
					questionGroupsHtml += '<div class="ques_line d-flex">';
					
						questionGroupsHtml += '<div class="q_grp d-flex flex-wrap">';

						questionGroupsHtml += '<div class="q_part d-flex  align-items-baseline">';
					if(aObj.numbering != 'none'){
						questionGroupsHtml += '<div class="q_num_space">';
						if(aObj.numbering == 'alphabet'){
							xx =(currQueNum == 1) ?aObj.numberstartfrom:nextChar(xx);					
						}else if (aObj.numbering == 'number'){
							xx =(x+parseInt(aObj.numberstartfrom));					
						}
						x++;
						questionGroupsHtml += xx+'. </div>';
					}
                  	if(tpOb.image != '' && tpOb.image != 'no'){
						questionGroupsHtml += '<div class="img_space"><img src='+tpOb.image+'></div>';
					}
                    var str = tpOb.question;
                    var opts = tpOb.options;
                    var count = (str.match(/[_]/g) || []).length;
                    var tCount=0;                     

                    var tmphtml = "";
                    var fillBoxesArr=[];

                    for (var rr = 0; rr < (opts).length; rr++) {
                        fillBoxesArr[rr]='';                       
						if(tpOb.inputbox == "no"){
							tmphtml = "<span class='pick_set' id='pick_set_"+currQueNum+"_"+(rr+1)+"'>";
						}else{
							tmphtml = "<span class='pick_set' id='pick_set_"+currQueNum+"_"+(rr+1)+"'><input class='text_input_area' type='text' readonly disabled>";
						}						
                        var tmpOpt = opts[rr];
                        for(var aa=0;aa<tmpOpt.length;aa++){
                            tmphtml += '<div class="pick" id="pick_'+currQueNum+'_'+(rr+1)+'_'+(aa+1)+'" data-opttext="'+tmpOpt[aa]+'">'+tmpOpt[aa]+'</div>';
                            if(aa < tmpOpt.length-1){
                                // tmphtml += '&nbsp;/&nbsp;';
                            }                           
                        }
						tmphtml += '</span>';
                        fillBoxesArr[rr] = tmphtml;
                    }
                    do {
						resArr = str.split("[_]")
						resArrAudio = [];
						resArr.forEach( (text,index) => {
							text !== '' ? resArrAudio.push( '<div class="audioIcon off contant not-disapled" data-audio="' + tpOb.audio + '">' + text + '</div>') : resArrAudio.push('');
						});
						str = resArrAudio.join(fillBoxesArr[tCount]);
						tCount++;
                    }
                    while (tCount < count);

					questionGroupsHtml += '<div class="d-flex justify-content-center">';
                    questionGroupsHtml += '<div class="text_part">'+str+'</div>';
					questionGroupsHtml += '</div>'; 	
					
					questionGroupsHtml += '</div>'; // - /q_part	
				
					questionGroupsHtml += '</div>'; // - /q_part
					questionGroupsHtml += '</div>';
					questionGroupsHtml += '<div class="icon_wrap p-2">';
					questionGroupsHtml += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
					questionGroupsHtml += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
                    questionGroupsHtml += '</div>';
					questionGroupsHtml += '</div>';

				}
			}									
			questionGroupsHtml += '</div>';// --/ tick_group
							
		}

		// ------------------------------------------------------------------ //
		// overlay mode (فيه top/left فعلياً): منحط الصورة و question_group
		// جوا نفس الحاوية (img_space) عشان question_group ياخد بالظبط
		// مقاس الصورة المعروض (100% x 100%) وينسحب معها وقت الـ resize.
		//
		// مش overlay (نشاطات عادية بدون إحداثيات): نفس السلوك الأصلي،
		// الصورة و question_group جنب بعض عادي.
		// ------------------------------------------------------------------ //
		if (isOverlayMode && aObj.image != 'no' && aObj.image != '') {
			htmlStmt += '<div class="img_space">';
				htmlStmt += '<img src="'+aObj.image+'">';
				htmlStmt += questionGroupsHtml;
			htmlStmt += '</div>';
		} else {
			if(aObj.image != 'no' && aObj.image != ''){
				if(aObj.imageposition == 'front'){
					htmlStmt += '<div class="img_space"><img src="'+aObj.image+'"></img></div>';
				}
			}
			htmlStmt += questionGroupsHtml;
			if(aObj.image != 'no' && aObj.image != ''){
				if(aObj.imageposition == 'back'){
					htmlStmt += '<div class="img_space"><img src="'+aObj.image+'"></img></div>';
				}
			}
		}

		htmlStmt += '</div></div></div>'; // --/ d-flex flex-wrap / all_cont / options
		
	}
	console.log('htmlStmt >> mcq Built');
	$( ".activity_area" ).append( htmlStmt );	
	
	setLoadedStatus(getCurrFileOrDirectory('file'));
}
function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}