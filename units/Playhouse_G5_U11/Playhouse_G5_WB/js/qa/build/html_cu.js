jQuery(function(){
	jQuery('.activity_area').addClass('activity_container');
	jQuery('.activity_container').attr( 'data-activity_type', _activity_json.type );
	jQuery('.activity_container').addClass( _activity_json.type+'_activity' );

	if((typeof(_activity_json.css_class)!="undefined")&&(_activity_json.css_class!="")){
		jQuery('.activity_container').addClass( _activity_json.css_class );
	}

	if((typeof(_activity_json.layout)!="undefined")&&(_activity_json.layout!="")){
		jQuery('.activity_container').addClass( 'layout_'+_activity_json.layout );
	}
	initActivity(_activity_json);

	jQuery('.checkBtn').click(function(){
        jQuery(this).addClass('disabled');
        validateActivity();
    });
    jQuery('.resetBtn').click(function(){
        jQuery(this).addClass('disabled');
        initActivity(_activity_json);
    });

    //setQuestionColor();

    //Check if class exists
    /*if(jQuery('body .grade_2').length>0){
    	alert("found");
    } else {
    	alert("no found");
    }*/
});

//Set the question font color based on the unit title color
function setQuestionColor(){
	jQuery('.question_style').css('color', _data.header.title.color);
}

function detectKeyPress(){
	enableBtns();
}

function detectOnClick(){
	enableBtns();	
}

function detectDragend(){
	enableBtns();
}

function disableBtns(){
	jQuery('.checkBtn').addClass('disabled');
    jQuery('.resetBtn').addClass('disabled');
}

function enableBtns(){
	jQuery('.checkBtn').removeClass('disabled');
    jQuery('.resetBtn').removeClass('disabled');
}

function resetActivity(){
	var activity_type = jQuery('.activity_container').data('activity_type');
	if(typeof(activity_type)!='undefined'){
		initActivity(_activity_json);
	}
}

function setDefaultAnswerDragDrop(activity){
	var default_answer = '';
	if(typeof(activity.default_answer)!='undefined'){
		jQuery.each(activity.default_answer, function(key, value){
			jQuery('.drag_drop_options div[data-value="'+value+'"]').css('text-decoration', 'line-through').attr('draggable', false).removeClass('draggable_div');
			jQuery('.drag_drop_questions input[type="text"]:eq('+(key-1)+')').val(value).removeClass('droppable_div').addClass('has_default_answer');
		});
	}
}

function setDefaultAnswerGroupCircle(activity){
	var default_answer = '';
	if(typeof(activity.default_answer)!='undefined'){
		jQuery.each(activity.default_answer, function(key, value){
			jQuery('.group_circle_correct_answer_activity .group_fill_cols[data-value="'+key+'"] ul.options li[data-value="'+value+'"]').trigger('click');
		});
	}
}

function writeHtml(activity, activity_html){
	var htmlStmt = "";

	htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
	htmlStmt +=  '<a href="">'
	htmlStmt +=  '<img src="../images/icons/back_btn.png" />'
	htmlStmt +=  '</a>'
	htmlStmt +=  '</div>'
	htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
	htmlStmt +=  '<a href="">'
	htmlStmt +=  '<img src="../images/icons/next_btn.png" />'
	htmlStmt +=  '</a>'
	htmlStmt +=  '</div>';
	htmlStmt += '<div class="act_head_group justify-content-center">';
		htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + activity.mainTitleAudio + '">';
			htmlStmt += '<div class="q-type-img-container">';
			htmlStmt += '<img class="mainTitle" src=' + activity.mainTitle + '>';
			if (activity.mainTitleIcon != undefined && activity.mainTitleIcon != '') {
			htmlStmt += '<img class="mainTitleIcon" src=' + activity.mainTitleIcon + ' style="right: ' + activity.mainTitleIconPos.right + '">';
			}
		htmlStmt += '</div>';
		htmlStmt += '</div>';

		htmlStmt += '<div class="activityHeading">'
			htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + activity.subTitleAudio + '">';
			htmlStmt += "<div class='page_sub_title d-flex'>";
				htmlStmt += "<p> " + activity.subTitleTextLeft + " </p>";
				for (var sicons = 0 ; sicons < activity.subTitleIcons.length ; sicons++) {
					htmlStmt += "<img src='" + activity.subTitleIcons[sicons] + "'/>";
				}
				htmlStmt += "<p> " + activity.subTitleTextRight + " </p>";
			htmlStmt += "</div>";
			htmlStmt += '</div>';
		htmlStmt += '</div>';
	htmlStmt += '</div>';
	
	
	jQuery('.activity_container').html(
		htmlStmt +
	'<div class="activity-content">'+activity_html+'</div>');
	// jQuery('.activity_container').html( '<div class="activity-heading"><div class="heading_image"><img src="../images/icons/'+activity.image+'" /></div><div class="heading_text">'+activity.heading+'</div><div style="clear:both;"></div></div><div class="activity-content">'+activity_html+'</div><div class="modal fade activityResult" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"></div></div></div></div>' );
}

function allowOnlyTrueAndFalse(obj) {
  if ((jQuery(obj).val().toLowerCase()=='t')||(jQuery(obj).val().toLowerCase()=='f')) {
      return true;
  } else {
      jQuery(obj).val("");
      return false;
  }
}

function allowOnlyNumeric(obj, e) {
	var regex = /^[0-9]*$/;
	if (regex.test(e.key)) {
		return true;
	} else {
		return false;
	}
}

function allowOnly(obj, e, allowed_char){
	console.log(allowed_char.split(',').indexOf(e.key));
	if ((allowed_char.split(',').indexOf(e.key))==-1) {
		return false;
	} else {
		return true;
	}
}

function select_this(obj, no_of_parent){
	jQuery(obj).parent().find(".selected").removeClass("selected");
	jQuery(obj).addClass("selected");
	
	if(no_of_parent==0){
		jQuery(obj).parent().find("input").val(jQuery(obj).attr('data-value'));
	} else if(no_of_parent==2){
		jQuery(obj).parent().parent().find("input").val(jQuery(obj).attr('data-value'));
	} else if(no_of_parent==3){
		jQuery(obj).parent().parent().parent().find("input").val(jQuery(obj).attr('data-value'));
	}

	//Remove tick/cross when choose options
	jQuery('.activity_result').remove();
}

function circle_select_this(obj){
	jQuery(obj).parent().parent().find(".selected").removeClass("selected");
	jQuery(obj).addClass("selected");
	jQuery(obj).parent().parent().find("input.checked_answer").val(jQuery(obj).attr('data-value'));
	
	//Remove tick/cross when choose options
	jQuery('.activity_result').remove();
}

function select_toggle_this(obj, no_of_parent){
	var val = jQuery(obj).attr('data-value');
	if(jQuery(obj).hasClass("selected")){
		val = ""; //Reset when deselect
		jQuery(obj).removeClass("selected");
	} else {
		jQuery(obj).addClass("selected");
	}
		
	if(no_of_parent==0){
		jQuery(obj).parent().find("input").val(val);
	} else if(no_of_parent==1){
		jQuery(obj).find("input").val(val);
	} else if(no_of_parent==2){
		jQuery(obj).parent().parent().find("input").val(val);
	} else if(no_of_parent==3){
		jQuery(obj).parent().parent().parent().find("input").val(val);
	}
}

function dropdown_select(obj, value){
	//alert(value);
	jQuery(obj).parent().parent().parent().find('.dropdown-toggle').html('<img src="../images/icons/new_blue_'+value+'.png" /><span class="caret"></span>');
	jQuery(obj).parent().parent().parent().parent().find('input[type="text"]').val(value);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  jQuery(ev.target).addClass('remove_item');
  ev.dataTransfer.setData("text", ev.target.innerText);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");

  //Remove options from list after drop
  jQuery('.drag_drop_activity .drag_drop_options .remove_item').remove();

  jQuery(ev.target).val(data);

  detectDragend();
}

function underlineSelected(color_class="") {
    var selection_obj = window.getSelection();
    var selected_text = selection_obj.toString();
    if(selected_text!=""){
	    var userSelection = selection_obj.getRangeAt(0);
	    var newNode = document.createElement("span");
	    newNode.setAttribute("class", "underline_selected current_selected "+color_class);
	    userSelection.surroundContents(newNode);
	    window.getSelection().removeAllRanges();
	}
    return selected_text;
}

function circleSelected() {
    var selection_obj = window.getSelection();
    var selected_text = selection_obj.toString();
    if(selected_text!=""){
	    var userSelection = selection_obj.getRangeAt(0);
	    var newNode = document.createElement("span");
	    newNode.setAttribute("class", "circle_selected current_selected ");
	    userSelection.surroundContents(newNode);
	    window.getSelection().removeAllRanges();
	}
    return selected_text;
}


function boxSelected() {
    var selection_obj = window.getSelection();
    var selected_text = selection_obj.toString();
    if(selected_text!=""){
	    var userSelection = selection_obj.getRangeAt(0);
	    var newNode = document.createElement("span");
	    newNode.setAttribute("class", "box_selected current_selected ");
	    userSelection.surroundContents(newNode);
	    window.getSelection().removeAllRanges();
	}
    return selected_text;
}


function playSound(file_name){
	var audio = new Audio(file_name);
	audio.play();
}

function resizeTextField(){
	jQuery('input.resize_text').each(function(){
	  if(jQuery(this).val()!=''){
	  	var current_width = jQuery(this).width();
	  	var new_width = ((jQuery(this).val().length+1)*12);
	  	if(new_width>current_width){
		    jQuery(this).css('width', new_width+'px');
		}
	  }
	});
}

function select_this_word(obj, no_of_parent){
	jQuery(obj).parent().find(".selected").removeClass("selected");
	jQuery(obj).addClass("selected");
	
	if(no_of_parent==0){
		jQuery(obj).parent().find(".answer_key").val(jQuery(obj).attr('data-value'));
	} else if(no_of_parent==2){
		jQuery(obj).parent().parent().find(".answer_key").val(jQuery(obj).attr('data-value'));
	} else if(no_of_parent==3){
		jQuery(obj).parent().parent().parent().find(".answer_key").val(jQuery(obj).attr('data-value'));
	}

	//Remove tick/cross when choose options
	jQuery('.activity_result').remove();
}

function select_this_word_append(obj, no_of_parent, answer_type){
	jQuery(obj).parent().find(".selected").removeClass("selected");
	jQuery(obj).addClass("selected");

	/*if(no_of_parent==2 && answer_type == 1){
	    jQuery(obj).parent().parent().find("input:first").val(jQuery(obj).attr('data-value'));
	} 
	else if(no_of_parent==2 && answer_type == 2){
		jQuery(obj).parent().parent().find("input:last").val(jQuery(obj).attr('data-value'));
	} */
	var val1 = val2 = "";

	if(typeof(jQuery(obj).parent().parent().parent().find('.options .selected').attr('data-value'))!='undefined'){
		val1 = jQuery(obj).parent().parent().parent().find('.options .selected').attr('data-value');
	}

	if(typeof(jQuery(obj).parent().parent().parent().find('.option .selected').attr('data-value'))!='undefined'){
		val2 = jQuery(obj).parent().parent().parent().find('.option .selected').attr('data-value');
	}

	var val = val1+val2;
	

	jQuery(obj).parent().parent().parent().find('input[type="text"]').val(val1+val2);

	if(_activity_json.answers.indexOf(val)!=-1){
		var answer_index = _activity_json.answers.indexOf(val);
		var question_values = Object.values(_activity_json.questions);
		playSound('../audios/'+question_values[answer_index].audio);
	}

	//Remove tick/cross when choose options
	jQuery('.activity_result').remove();
}

function htmlEntityEncode(str) {
	var buf = [];
	for (var i=str.length-1;i>=0;i--) {
		buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
	}
	return buf.join('');
}