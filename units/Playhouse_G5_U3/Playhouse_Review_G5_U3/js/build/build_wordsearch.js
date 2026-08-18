//  ****************************************** //
//  WordSearch - build file
//  Layout/markup restyled to match the reference "Word Search!" image.
//  Class names used by the interaction script (WordSearch.prototype) are
//  UNCHANGED: .ws_grid, .ws_cell[data-row][data-col], .ws_word_item[data-wordid]
//  ****************************************** //
function buildWordSearchBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj != undefined && aObj != null) {

        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/back_btn.png" /></a>';
        htmlStmt += '</div>';
        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/next_btn.png" /></a>';
        htmlStmt += '</div>';

        // ===================================================================== all_cont =====================
        htmlStmt += '<div class="options mx-auto">';
        htmlStmt += '<div class="all_cont flex-column justify-content-start justify-content-sm-center">';

        // ---------------- decorative background bubbles (purely visual) ----------------
        htmlStmt += '<div class="ws_bubble ws_bubble1"></div>';
        htmlStmt += '<div class="ws_bubble ws_bubble2"></div>';
        htmlStmt += '<div class="ws_bubble ws_bubble3"></div>';
        htmlStmt += '<div class="ws_bubble ws_bubble4"></div>';

        htmlStmt += '<div class="screen_elements d-flex flex-column align-items-center h-100">';

        // ---------------- title (plain text, no pill/border - matches image) ----------------
        htmlStmt += '<div class="ws_title_wrap"><div class="ws_title">Word Search!</div></div>';

        // ---------------- the letter grid ----------------
        htmlStmt += '<div class="ws_grid_wrap">';
        htmlStmt += '<div class="ws_grid" data-size="' + aObj.gridSize + '" style="grid-template-columns: repeat(' + aObj.gridSize + ', 1fr);">';
        for (var r = 0; r < aObj.grid.length; r++) {
            for (var c = 0; c < aObj.grid[r].length; c++) {
                htmlStmt += '<div class="ws_cell" data-row="' + r + '" data-col="' + c + '">' + aObj.grid[r][c] + '</div>';
            }
        }
        htmlStmt += '</div>'; // ws_grid
        htmlStmt += '</div>'; // ws_grid_wrap

        // ---------------- "Find the words:" label (no direction-arrow icon - not in the reference image) ----------------
        htmlStmt += '<div class="que ws_instructions" data-qno="1">';
        htmlStmt += '<div class="audioIcon off contant" data-audio="' + aObj.subTitleAudio + '">';
        htmlStmt += '<div class="ws_find_label">' + aObj.subTitleTextLeft + '</div>';
        htmlStmt += '</div>';
        htmlStmt += '</div>';

        // ---------------- word list box, 3 columns (matches the image's grouping) ----------------
        // col 1 = wordsLeft, col 2/3 = wordsRight split in half
        var col1 = aObj.wordsLeft;
        var col2 = aObj.wordsRight.slice(0, Math.ceil(aObj.wordsRight.length / 2));
        var col3 = aObj.wordsRight.slice(Math.ceil(aObj.wordsRight.length / 2));
        var columns = [col1, col2, col3];

        htmlStmt += '<div class="ws_word_box">';
        htmlStmt += '<div class="ws_word_list d-flex justify-content-between">';
        jQuery.each(columns, function (ci, colWords) {
            htmlStmt += '<div class="ws_word_col">';
            jQuery.each(colWords, function (i, wId) {
                var wObj = null;
                jQuery.each(aObj.words, function (wi, wv) { if (wv.id == wId) { wObj = wv; } });
                if (wObj != null) {
                    htmlStmt += '<div class="ws_word_item" data-wordid="' + wObj.id + '">' + wObj.display + '</div>';
                }
            });
            htmlStmt += '</div>'; // ws_word_col
        });
        htmlStmt += '</div>'; // ws_word_list
        htmlStmt += '</div>'; // ws_word_box

        htmlStmt += '</div>'; // screen_elements
        htmlStmt += '</div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> WordSearch Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}