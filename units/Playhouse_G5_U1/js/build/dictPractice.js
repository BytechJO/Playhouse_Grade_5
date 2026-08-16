//  ****************************************** //
//  Dictionary Practice Popup - Page: SB_G5_U1_P9_1
//  Version no: 1
//  Adds a button that opens the existing .activityCtrlPanel
//  modal and fills it with the "Dictionary Practice" content,
//  including a stereo (audioIcon) for the paragraph.
//  ****************************************** //
function buildDictPracticeButton() {
	var htmlStmt = '';

	htmlStmt += '<div class="dictPracticeBtn audioIcon off d-flex contant" data-toggle="modal" data-target=".activityCtrlPanel">';
		htmlStmt += '<img src="../images/icons/2.png" style="width: 100%; height: 65px;">';
	htmlStmt += '</div>';

	console.log('htmlStmt >> dictPracticeButton Built');
	$( ".activity_container" ).append( htmlStmt );
}

function buildDictPracticeContent() {
	var htmlStmt = '';

	htmlStmt += '<h5 class="dictPracticeTitle">Dictionary Practice</h5>';

	htmlStmt += '<div class="audioIcon off d-flex contant" data-audio="../audios/new/p9dictionary.mp3">';
		htmlStmt += '<p>Guide words help us find words in the dictionary more quickly. ';
		htmlStmt += 'Guide words are found at the top of each page in the dictionary on the left side and right side of a page. ';
		htmlStmt += 'They tell us what the first and last words on each page are.</p>';
	htmlStmt += '</div>';

	htmlStmt += '<div class="dictPracticeExample">';
		htmlStmt += '<span class="pop_title">Example:</span>';
		htmlStmt += '<table class="dictPracticeTable">';
			htmlStmt += '<tr><th>Word</th><th>Page #</th><th>Guide Words</th></tr>';
			htmlStmt += '<tr><td>feel</td><td>202</td><td>fatal-felony</td></tr>';
			htmlStmt += '<tr><td>limit</td><td>256</td><td>lace-line</td></tr>';
		htmlStmt += '</table>';
	htmlStmt += '</div>';

	console.log('htmlStmt >> dictPracticeContent Built');
	return htmlStmt;
}

$(document).on('click', '.dictPracticeBtn', function () {
	$('.activityCtrlPanel .modal-title').text('Dictionary Practice');
	$('.activityCtrlPanel .ctrlIcon').html('<img src="../images/pages/activities/7.jpg">');
	$('.activityCtrlPanel .modal-body').html( buildDictPracticeContent() );
});

buildDictPracticeButton();