function buildComplaintLetterBody(aObj) {
  var htmlStmt = "";
  if (typeof aObj != undefined && aObj != null) {
    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/back_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";
    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/next_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";

    // ===================================================================== heading =====================
    htmlStmt += '<div class="act_head_group justify-content-center">';
    htmlStmt +=
      '<div class="audioIcon off contant " data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.mainTitleAudio +
      '">';
    htmlStmt += '<div class="q-type-img-container">';
    htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + ">";
    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" src=' +
        aObj.mainTitleIcon +
        ' style="right: ' +
        aObj.mainTitleIconPos.right +
        ';">';
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="activityHeading">';
    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.section1.titleAudio +
      '">';
    htmlStmt += "<div class='page_sub_title'>";
    htmlStmt += "<p> " + aObj.section1.title + " </p>";

    // htmlStmt += "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";

    htmlStmt += "</div>";
      htmlStmt +=
      '<div class="contant section_instruction" data-audio="' +
      aObj.section1.instructionAudio +
      '">' +
      aObj.section1.instruction +
      "</div>";
    htmlStmt += "</div>";
    htmlStmt +=
      '<div class="active_tool_indicator">Choose a tool below, then click on the letter.</div>';
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="options complaint_wrap">';

    // ============================== قسم 1: Read about it ==============================
    var s1 = aObj.section1;
    htmlStmt += '<div class="complaint_section section_1">';

    htmlStmt += '<div class="section_head d-flex align-items-center">';

    // ===== ورقة الرسالة =====
    htmlStmt += '<div class="letter_paper">';
    htmlStmt += '<div class="tape tape_left"></div>';
    htmlStmt += '<div class="tape tape_right"></div>';

    htmlStmt +=
      '<div class="letter_line letter_date">' + s1.letter.date + "</div>";
    htmlStmt +=
      '<div class="letter_line letter_salutation">' +
      s1.letter.salutation +
      "</div>";

    for (var p = 0; p < s1.letter.paragraphs.length; p++) {
      htmlStmt +=
        '<div class="letter_line letter_paragraph" data-pidx="' + p + '">';
      var chunks = s1.letter.paragraphs[p];
      for (var c = 0; c < chunks.length; c++) {
        var chunk = chunks[c];
        var correctAttr =
          chunk.correctStyle != undefined && chunk.correctStyle != null
            ? chunk.correctStyle
            : "";
        htmlStmt +=
          '<span class="letter_chunk" data-pidx="' +
          p +
          '" data-cidx="' +
          c +
          '" data-correct="' +
          correctAttr +
          '">';
        htmlStmt += chunk.text;
        htmlStmt += "</span> ";
      }
      htmlStmt += "</div>";
    }

    htmlStmt +=
      '<div class="letter_line letter_closing">' + s1.letter.closing + "</div>";
    htmlStmt +=
      '<div class="letter_line letter_signature">' +
      s1.letter.signature +
      "</div>";
    htmlStmt += '<div class="letter_line letter_line_empty">&nbsp;</div>';

    htmlStmt += "</div>"; // end letter_paper
    htmlStmt += "</div>"; // end section_1

    // ============================== قسم 2: Find it ==============================
    var s2 = aObj.section2;
    htmlStmt += '<div class="complaint_section section_2">';

    htmlStmt += '<div class="act_head_group justify-content-center">';
   

    htmlStmt += '<div class="activityHeading">';
    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' +
      1 +
      '" data-audio="' +
      s2.titleAudio +
      '">';
    htmlStmt += "<div class='page_sub_title'>";
    htmlStmt += "<p> " + s2.title + " </p>";

    // htmlStmt += "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt +=
      '<div class="contant section_instruction" data-audio="' +
      s2.instructionAudio +
      '">' +
      s2.instruction +
      "</div>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";


    htmlStmt += '<div class="find_it_tasks d-flex">';

    htmlStmt += '<div class="tasks_col tasks_col_left">';
    for (var tl = 0; tl < s2.tasksLeft.length; tl++) {
      var task = s2.tasksLeft[tl];
      // إذا الستايل "box" منحط annot_box على .task_row نفسها (الصندوق يلف كل السطر)
      // أما "circle"/"underline" منحطهم على النص جوا .task_text بس (يلف النص حصرًا)
      var rowClass = task.style === "box" ? " annot_box" : "";
      var textClass = task.style === "box" ? "" : " annot_" + task.style;
      htmlStmt +=
        '<div class="task_row tool_btn' +
        rowClass +
        '" data-tool="' +
        task.style +
        '">';
      if (task.style !== "box") {
        htmlStmt += '<span class="task_dash">- </span>';
      }
      htmlStmt +=
        '<span class="contant task_text' +
        textClass +
        '" data-audio="' +
        task.audio +
        '">' +
        task.text +
        "</span>";
      htmlStmt += "</div>";
    }
    htmlStmt += "</div>"; // end tasks_col_left

    htmlStmt += '<div class="tasks_col tasks_col_right">';
    for (var tr = 0; tr < s2.tasksRight.length; tr++) {
      var taskR = s2.tasksRight[tr];
      var rowClassR = taskR.style === "box" ? " annot_box" : "";
      var textClassR = taskR.style === "box" ? "" : " annot_" + taskR.style;
      htmlStmt +=
        '<div class="task_row tool_btn' +
        rowClassR +
        '" data-tool="' +
        taskR.style +
        '">';
      if (taskR.style !== "box") {
        htmlStmt += '<span class="task_dash">- </span>';
      }
      htmlStmt +=
        '<span class="contant task_text' +
        textClassR +
        '" data-audio="' +
        taskR.audio +
        '">' +
        taskR.text +
        "</span>";
      htmlStmt += "</div>";
    }
    htmlStmt += "</div>"; // end tasks_col_right

    htmlStmt += "</div>"; // end find_it_tasks

    htmlStmt += "</div>"; // end section_2

    htmlStmt += "</div>"; // end complaint_wrap

    $(".activity_area").append(htmlStmt);
    setLoadedStatus(getCurrFileOrDirectory("file"));
  }
}
