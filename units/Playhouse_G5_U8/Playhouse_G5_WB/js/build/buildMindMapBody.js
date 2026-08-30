function buildMindMapBody(aObj) {
  var htmlStmt = "";
  if (typeof aObj != undefined && aObj != null) {
    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1"><a href=""><img src="../images/icons/back_btn.png" /></a></div>';
    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1"><a href=""><img src="../images/icons/next_btn.png" /></a></div>';

    // ===== العنوان =====
    htmlStmt += '<div class="act_head_group justify-content-center">';
    htmlStmt +=
      '<div class="audioIcon off contant" data-slideNum="1" data-audio="' +
      aObj.mainTitleAudio +
      '">';
    htmlStmt += '<div class="q-type-img-container">';
    htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + ">";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += '<div class="activityHeading">';
    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle d-flex" data-slideNum="1" data-audio="' +
      aObj.subTitleAudio +
      '" style="max-width:100%">';
    htmlStmt +=
      "<div class='page_sub_title d-flex'><p>" +
      aObj.subTitleTextLeft +
      "</p><p class='sub-title-right'>" +
      aObj.subTitleTextRight +
      "</p></div>";
      if (aObj.sideImage) {
       htmlStmt += '<img class="sideImage" src="' + aObj.sideImage + '" />';
     }
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // ===== المحتوى =====
    htmlStmt += '<div class="options mindmap_wrap d-flex">';
   
    htmlStmt += '<div class="mindmap_diagram">';
    htmlStmt += '<svg class="connector_lines"></svg>';
    for (var b = 0; b < aObj.boxes.length; b++) {
      var box = aObj.boxes[b];
      htmlStmt += '<div class="mindbox mindbox_' + box.id + '">';
      htmlStmt +=
        '<textarea class="mindtext" placeholder="' +
        (box.placeholder || "") +
        '"></textarea>';
      htmlStmt += "</div>";
    }
    htmlStmt += "</div>"; // end mindmap_diagram
    htmlStmt += "</div>"; // end options

    $(".activity_area").append(htmlStmt);

    // ما في تشيك بهالنشاط - نخفي زر الشيك
    $(".checkBtn").addClass("d-none");

    drawConnectorLines();
    setLoadedStatus(getCurrFileOrDirectory("file"));
  }
}

// يرسم الخطوط الواصلة بين الصندوق النص والصناديق المحيطة
function drawConnectorLines() {
  var svg = document.querySelector(".connector_lines");
  var center = document.querySelector(".mindbox_center");
  var others = document.querySelectorAll(".mindbox:not(.mindbox_center)");
  var parentRect = document
    .querySelector(".mindmap_diagram")
    .getBoundingClientRect();
  var cRect = center.getBoundingClientRect();
  var cx = cRect.left + cRect.width / 2 - parentRect.left;
  var cy = cRect.top + cRect.height / 2 - parentRect.top;
  var linesHtml = "";
  others.forEach(function (box) {
    var r = box.getBoundingClientRect();
    var x = r.left + r.width / 2 - parentRect.left;
    var y = r.top + r.height / 2 - parentRect.top;
    linesHtml +=
      '<line x1="' +
      cx +
      '" y1="' +
      cy +
      '" x2="' +
      x +
      '" y2="' +
      y +
      '" stroke="#999" stroke-width="2"/>';
  });
  svg.innerHTML = linesHtml;
}
