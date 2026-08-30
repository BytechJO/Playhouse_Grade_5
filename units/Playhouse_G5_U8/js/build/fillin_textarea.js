/*$(function () {
    var myData = {};  */
    function buildFillInBody(aObj) {
        var htmlStmt = '';
        if (aObj != undefined && aObj != null) {
            var layOut = parseInt(aObj.layout);
           
            if (layOut == 4) {
               	// ============== ****  **** ==============
               
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
				// htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.topTitleAudio + '">';
				// 	htmlStmt += "<p>How-to Essay </br>" +
				// 				"It's not so easy to write a how-to essay. The hardest part is choosing a topic. " +
				// 				"Everyone has something to share, and telling others how to do it is the best part " +
				// 				"about writing a how-to essay. </p>";
				// htmlStmt += '</div>';

				htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
				htmlStmt += "<div class='page_sub_title'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
						htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					}
					htmlStmt +="<br/>"
				
				htmlStmt += "</div>";	htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
				// htmlStmt += "<table style='width:100%; color: black; font-weight: normal;'>"+
				// 			"<thead>"+
				// 			"<tr style='font-weight: bold;'>"+
				// 			"<th colspan='2'>Ideas/Topics</th>"+
				// 			"</tr>"+
				// 			"</thead>"+
				// 			"<tbody>"+
				// 			"<tr>"+
				// 			"<td>How to plan a party</td>"+
				// 			"<td>How to babysit</td>"+
				// 			"</tr>"+
				// 			"<tr>"+
				// 			"<td>How to stay safe on the internet</td>"+
				// 			"<td>How to recycle glass and plastic</td>"+
				// 			"</tr>"+
				// 			"<tr>"+
				// 			"<td>How to stop pollution</td>"+
				// 			"<td>How to organise a clean-up day at your school</td>"+
				// 			"</tr>"+
				// 			"</tbody>"+
				// 			"</table>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';
    // ============== ****  **** ==============  

                htmlStmt += '<div class="options">';
                
                htmlStmt += '<div class="textarea-container" style="background-image:url('+aObj.background_image+')">';
                    htmlStmt += ' <textarea id="paper-textarea" rows="10" cols="50" maxlength="400"></textarea>';
                htmlStmt += '</div>';
                
                htmlStmt += '</div>';
            }
            
        }
    
        console.log('htmlStmt >> fillin Built');
        $(".activity_area").append(htmlStmt);
    
        setLoadedStatus(getCurrFileOrDirectory('file'));
    }
    /*if (fillin_data != undefined && fillin_data != null) {	
            myData = fillin_data;			
            buildFillInBody(myData);
         }
    });*/