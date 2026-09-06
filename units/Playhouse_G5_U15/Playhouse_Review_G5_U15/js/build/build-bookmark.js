// build-bookmark.js — صفحة عرض بسيطة (بدون تصحيح) - نص + صور + أيقونات صوت
function buildBookmarkBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj === 'undefined' || aObj === null) return;
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
    // العنوان الرئيسي فوق
    htmlStmt += '<div class="bm-title">';
        htmlStmt += '<div class="audioIcon off contant" data-audio="' + aObj.titleAudio + '"></div>';
        htmlStmt += aObj.title;
    htmlStmt += '</div>';

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt += '<div class="all_cont">';
    htmlStmt += '<div class="bm-wrap">';

        // ===== العمود الأيسر: النص =====
        htmlStmt += '<div class="bm-text-card">';

            htmlStmt += '<div class="audioIcon off contant bm-line" data-audio="' + aObj.introAudio + '">';
            htmlStmt += aObj.intro;
            htmlStmt += '</div>';

            htmlStmt += '<div class="audioIcon off contant bm-heading" data-audio="' + aObj.needsHeadingAudio + '">';
            htmlStmt += aObj.needsHeading;
            htmlStmt += '</div>';

            htmlStmt += '<div class="bm-needs-row">';
                htmlStmt += '<div class="audioIcon off contant bm-needs-list" data-audio="' + aObj.needsListAudio + '">';
                htmlStmt += '<ul>';
                for (var n = 0; n < aObj.needsList.length; n++) {
                    htmlStmt += '<li>' + aObj.needsList[n] + '</li>';
                }
                htmlStmt += '</ul>';
                htmlStmt += '</div>';

                htmlStmt += '<div class="bm-template-img">';
                    htmlStmt += '<img src="' + aObj.templateImage + '" alt="template"/>';
                htmlStmt += '</div>';
            htmlStmt += '</div>'; // end bm-needs-row

            htmlStmt += '<div class="audioIcon off contant bm-heading" data-audio="' + aObj.directionsHeadingAudio + '">';
            htmlStmt += aObj.directionsHeading;
            htmlStmt += '</div>';

            htmlStmt += '<ol class="bm-directions">';
            for (var d = 0; d < aObj.directions.length; d++) {
                htmlStmt += '<li>';
                    htmlStmt += '<div class="audioIcon off contant" data-audio="' + aObj.directions[d].audio + '">';
                    htmlStmt += aObj.directions[d].text;
                    htmlStmt += '</div>';
                htmlStmt += '</li>';
            }
            htmlStmt += '</ol>';

        htmlStmt += '</div>'; // end bm-text-card

        // ===== العمود الأيمن: الصورة =====
        htmlStmt += '<div class="bm-image-card">';
            htmlStmt += '<img src="' + aObj.characterImage + '" alt="painter"/>';
        htmlStmt += '</div>';

    htmlStmt += '</div>'; // end bm-wrap

    // رقم الصفحة بالزاوية
    // htmlStmt += '<div class="bm-page-num">' + aObj.pageNumber + '</div>';

    htmlStmt += '</div>'; // end all_cont
    htmlStmt += '</div>'; // end options

    $('.activity_area').append(htmlStmt);

    // صفحة عرض بس - ما في checkBtn/resetBtn/validate، فمنخفي أزرار الفحص
    $('.checkBtn, .resetBtn').addClass('d-none');

    setLoadedStatus(getCurrFileOrDirectory('file'));
}