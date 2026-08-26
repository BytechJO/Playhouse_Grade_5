function validateActivity() {
	var activity_type = jQuery('.activity_container').data('activity_type');
	if(typeof(activity_type)!='undefined'){
		var err = 0;
		jQuery('.'+activity_type+'_activity .activity_result').remove();

		// existing word-answers check
		jQuery('.'+activity_type+'_activity input[type="text"].droppable_div, .'+activity_type+'_activity input[type="text"][readonly]').each(function(k, v){
			if(_activity_json.answers[k]!=jQuery(this).val()){
				jQuery('<span class="activity_result"><img src="../images/icons/cross_btn.png" /></span>').insertAfter(jQuery(this));
				err++;
			} else {
				jQuery('<span class="activity_result"><img src="../images/icons/check_btn.png" /></span>').insertAfter(jQuery(this));
			}
		});

		// NEW: image number-inputs check
		jQuery('.'+activity_type+'_activity .img_number_input').each(function(){
			var correct = jQuery(this).data('answer') + '';
			var val = jQuery(this).val().trim();
			if(val == correct){
				jQuery(this).css('border-color', '#3aa655');
			} else {
				jQuery(this).css('border-color', '#e03131');
				err++;
			}
		});

		if(err>0){
			tryagain();
		} else {
			goodjob();
		}
	}
}