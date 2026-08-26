function buildReverseBingoBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj == undefined || aObj == null) return;

    var gridSize = aObj.gridSize || 5;
    var centerIndex = Math.floor((gridSize * gridSize) / 2);

    // لازم كلاس "options" يكون موجود على العنصر الرئيسي، لأنو نظام
    // الأنشطة العام (activities.js) بيدور عليه بـ getElementsByClassName("options")
    // لما يبني ReverseBingoController - نفس نمط buildFillInBody / buildMcqBody
    htmlStmt += '<div class="options reverse_bingo_wrap">';

        htmlStmt += '<div class="rb_title_tag">' + aObj.title + '</div>';

        htmlStmt += '<div class="rb_instructions">' + aObj.instructions + '</div>';

        htmlStmt += '<div class="rb_grid" style="grid-template-columns: repeat(' + gridSize + ', 1fr);">';
        for (var i = 0; i < gridSize * gridSize; i++) {
            if (i == centerIndex) {
                htmlStmt += '<div class="rb_cell rb_center crossed" data-index="' + i + '">' + aObj.centerWord + '</div>';
            } else {
                htmlStmt += '<div class="rb_cell" data-index="' + i + '"></div>';
            }
        }
        htmlStmt += '</div>'; // end rb_grid

        htmlStmt += '<div class="rb_bingo_banner d-none">🎉 BINGO! 🎉</div>';

        htmlStmt += '<div class="rb_wordbank_title">WORD POWER WORDS</div>';
        htmlStmt += '<div class="rb_wordbank">';
        for (var w = 0; w < aObj.wordBank.length; w++) {
            htmlStmt += '<div class="rb_word_chip" data-word="' + aObj.wordBank[w] + '">' + aObj.wordBank[w] + '</div>';
        }
        htmlStmt += '</div>'; // end rb_wordbank

        htmlStmt += '<div class="rb_controls">';
            htmlStmt += '<button type="button" class="rb_reset_btn">Reset Board</button>';
        htmlStmt += '</div>';

    htmlStmt += '</div>'; // end options / reverse_bingo_wrap

    $(".activity_area").append(htmlStmt);

    // ملاحظة: ما منعمل هون new ReverseBingoController(...) -
    // النظام العام (activities.js) هو يلي بينشئها لما يشوف aActTyp == 'bingo':
    //   theActivity = new ReverseBingoController(quePart, reverseBingo_data);

    if (typeof setLoadedStatus == 'function') {
        setLoadedStatus(getCurrFileOrDirectory('file'));
    }
}