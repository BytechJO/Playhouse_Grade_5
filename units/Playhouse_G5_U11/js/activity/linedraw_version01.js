//  ****************************************** //
//  LINE DRAW (revamped) - Version no: 1.2
//  Date created - July 25, 2020
//  Date updated - August 06, 2020 (startDraw reset)
//  Date updated - August 20, 2020 (line color maintained at screen resize)
//  Written by - Karthika. G
//  ****************************************** //
window.LineDraw = function (obj, dataObj) {
  ob = obj[0].getElementsByClassName("options");
  this.settings = {
    activity_area: ob[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };
  this.orientationAdjust = "yes";
  this.init(this.settings);
};
LineDraw.prototype = {
  init: function (ob) {
    ob.startDraw = false;

    ob.dropConnections = [];
    ob.correctCount = 0;
    ob.wrongCount = 0;
    ob.resultArr = [];

    ob.lineObjects = [];
    ob.lineOb = {};
    ob.lineOb.startNode;
    ob.lineOb.endNode;
    ob.lineOb.startX = 0;
    ob.lineOb.startY = 0;
    ob.lineOb.endX = 0;
    ob.lineOb.endY = 0;
    ob.lineOb.distance = 0;
    ob.lineOb.angle = 0;
    ob.lineOb.startElement = "";
    ob.lineOb.color = "";

    ob.lineColor = "";
    ob.lineThickness = 0;
    ob.connectType = "";
    ob.selectionColor = "";
    ob.transformPerc = "";

    ob.rightOffset;
    ob.containerRight = 0;
    ob.topOffset = 0;
    ob.setI;
    this.ob = ob;
    this.listen(ob);
  },
  screenPoseAdjustments: function () {
    var self = this;
    var ob = this.ob;
    if (ob.lineObjects.length > 0) {
      for (var ln = 0; ln < ob.lineObjects.length; ln++) {
        self.setValuesForLine(ob.lineObjects[ln]);
        self.drawRect(ob.lineObjects[ln], "draw", "");
      }
    }
  },
  listen: function (ob) {
    var self = this;
    var $area = $(ob.activity_area);

    ob.lineColor =
      typeof ob.data_obj.linecolor != undefined && ob.data_obj.linecolor != null
        ? ob.data_obj.linecolor
        : "blue";
    ob.nodeColor =
      typeof ob.data_obj.nodecolor != undefined && ob.data_obj.nodecolor != null
        ? ob.data_obj.nodecolor
        : "#5d5d5d";
    ob.lineThickness =
      typeof ob.data_obj.strokewidth != undefined &&
      ob.data_obj.strokewidth != null
        ? parseInt(ob.data_obj.strokewidth)
        : 4;
    ob.connectType =
      typeof ob.data_obj.connect != undefined && ob.data_obj.connect != null
        ? ob.data_obj.connect
        : "single";
    ob.selectionColor =
      typeof ob.data_obj.nodeselectioncolor != undefined &&
      ob.data_obj.nodeselectioncolor != null
        ? ob.data_obj.nodeselectioncolor
        : "#38a3ff";
    ob.transformPerc = parseInt(ob.lineThickness) / 2;

    $area.find(".node").click(function (e) {
      var $thisNodeEl = $(this);
      var thisNode = $thisNodeEl.attr("class").split(" ")[1]; // dragPoint / dropPoint
      var thisID = $thisNodeEl.parent().attr("id");
      var isConnected =
        $thisNodeEl.data("connected") != undefined &&
        $thisNodeEl.data("connected") != "";

      if ($thisNodeEl.css("cursor") != "pointer") {
        return; // العقدة أصلاً معطّلة (بعد Check ناجح مثلاً)
      }

      // ============================== حالة 1: هاي أول كبسة (بدء رسم خط) ==============================
      if (!ob.startDraw) {
        // ============ جديد: لو العقدة متوصلة أصلاً بخط بوضع "single"، فُك الخط القديم أولاً ============
        if (isConnected && ob.connectType == "single") {
          self.removeConnectionForNode(thisID);
        }

        ob.lineOb.startNode = $thisNodeEl;
        ob.lineOb.startID = thisID;
        ob.lineOb.startElement = thisNode;
        ob.lineOb.startGroup = $thisNodeEl.parent().data("group"); // ⬅️ من التعديل السابق
        $thisNodeEl.css("border-color", ob.selectionColor);
        ob.startDraw = true;
        return;
      }

      // ============================== حالة 2: هاي تاني كبسة (إنهاء الخط) ==============================
      var typeMatch =
        ob.lineOb.startElement == "dragPoint"
          ? thisNode == "dropPoint"
          : thisNode == "dragPoint";
      var groupMatch =
        $thisNodeEl.parent().data("group") == ob.lineOb.startGroup;
      var connectCondition = typeMatch && groupMatch;

      // لو دست على نفس عقدة البداية (لغيت الاختيار) - رجّع الحالة idle بلا أي رسم
      if (thisID == ob.lineOb.startID) {
        $thisNodeEl.css("border-color", "transparent");
        ob.startDraw = false;
        ob.lineOb = {};
        return;
      }

      if (!connectCondition) {
        // نوع أو مجموعة غير متطابقين - تجاهل الكبسة، خلي المستخدم يجرب نقطة تانية بدون ما نعلّق النظام
        return;
      }

      // ============ جديد: لو نقطة النهاية متوصلة أصلاً بوضع single، فُك خطها القديم أولاً ============
      if (
        ob.connectType == "single" &&
        $thisNodeEl.data("connected") != undefined &&
        $thisNodeEl.data("connected") != ""
      ) {
        self.removeConnectionForNode(thisID);
      }

      ob.lineOb.endNode = $thisNodeEl;
      ob.lineOb.endID = thisID;

      $area
        .find("#" + ob.lineOb.startID)
        .find(".node")
        .data("connected", ob.lineOb.endID);
      $thisNodeEl.data("connected", ob.lineOb.startID);

      ob.lineOb.color = ob.lineColor;
      self.setValuesForLine(ob.lineOb);
      self.drawRect(ob.lineOb, "draw", "");
      $thisNodeEl.css("border-color", ob.selectionColor);

      var length = ob.lineObjects.length;
      ob.lineObjects[length] = ob.lineOb;
      ob.lineOb = {};
      // ============ جديد: خفّي أي أيقونة قديمة عالطرفين الجداد ============
      self.clearIconForID(ob.lineObjects[length].startID);
      self.clearIconForID(ob.lineObjects[length].endID);
      document
        .getElementsByClassName("checkBtn")[0]
        .classList.remove("disabled");
      // =====================================================================
      ob.setI = setInterval(function () {
        self.resetNodes("draw", true);
      }, 500);

      if (ob.lineObjects.length > 0) {
        document
          .getElementsByClassName("checkBtn")[0]
          .classList.remove("disabled");
        document
          .getElementsByClassName("resetBtn")[0]
          .classList.remove("disabled");
      }
      ob.startDraw = false;
    });
  },

  // ============ دالة جديدة: تفك أي خط موصول أصلاً بعقدة معينة (تشيل الخط + تصفّي البيانات من الطرفين) ============
  // دالة جديدة: تخفي أيقونة الصح/الخطأ تبع أي drop معين (لما تتغيّر وصلته)
  clearIconForID: function (elId) {
    var ob = this.ob;
    var $area = $(ob.activity_area);
    if (elId.indexOf("drop_") === 0) {
      var $dropEl = $area.find("#" + elId);
      $dropEl.find(".icon_wrap").css("display", "none");
      $dropEl.find(".tick").css("display", "none");
      $dropEl.find(".cross").css("display", "none");
    }
  },

  removeConnectionForNode: function (nodeID) {
    var ob = this.ob;
    var $area = $(ob.activity_area);
    var partnerID = $area
      .find("#" + nodeID)
      .find(".node")
      .data("connected");

    if (partnerID == undefined || partnerID == "") {
      return;
    }

    for (var i = ob.lineObjects.length - 1; i >= 0; i--) {
      var lo = ob.lineObjects[i];
      var matchesForward = lo.startID == nodeID && lo.endID == partnerID;
      var matchesBackward = lo.startID == partnerID && lo.endID == nodeID;
      if (matchesForward || matchesBackward) {
        $area.find("#" + lo.name).remove();
        ob.lineObjects.splice(i, 1);
        break;
      }
    }

    $area
      .find("#" + nodeID)
      .find(".node")
      .data("connected", "");
    $area
      .find("#" + partnerID)
      .find(".node")
      .data("connected", "");
    $area
      .find("#" + nodeID)
      .find(".node")
      .css("border-color", "transparent");
    $area
      .find("#" + partnerID)
      .find(".node")
      .css("border-color", "transparent");

    // ============ جديد: خفّي الأيقونة القديمة تبع الـ drop المتأثر ============
    this.clearIconForID(nodeID);
    this.clearIconForID(partnerID);
    // فعّل زر Check تاني لأنو الوضع تغيّر وصار محتاج تصحيح جديد
    document.getElementsByClassName("checkBtn")[0].classList.remove("disabled");
    // ============================================================================

    if (ob.lineObjects.length == 0) {
      document.getElementsByClassName("checkBtn")[0].classList.add("disabled");
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
    }
  },
  setValuesForLine: function (lineOb) {
    var ob = this.ob;
    var halfWidth = parseInt(lineOb.startNode.outerWidth()) / 2;
    lineOb.height = ob.lineThickness;
    var lineHalfHeight = lineOb.height / 2;
    // (lineOb).angle = Math.atan2( ((lineOb).endNode).position().top -((lineOb).startNode).position().top, ((lineOb).endNode).position().left -((lineOb).startNode).position().left ) * 180 / Math.PI;

    var st_margin_left = parseInt(lineOb.startNode.css("margin-left"));
    var st_margin_top = parseInt(lineOb.startNode.css("margin-top"));

    lineOb.startY =
      lineOb.startNode.position().top +
      (st_margin_top + halfWidth) -
      lineHalfHeight;
    lineOb.startX =
      lineOb.startNode.position().left +
      (st_margin_left + halfWidth) -
      lineHalfHeight;

    // console.log('st> ', (lineOb).startX, ((lineOb).startNode).css('margin-left'), (lineOb).startY,((lineOb).startNode).css('margin-top') );

    var ed_margin_left = parseInt(lineOb.endNode.css("margin-left"));
    var ed_margin_top = parseInt(lineOb.endNode.css("margin-top"));

    lineOb.endY =
      lineOb.endNode.position().top +
      (ed_margin_top + halfWidth) -
      lineHalfHeight;
    lineOb.endX =
      lineOb.endNode.position().left +
      (ed_margin_left + halfWidth) -
      lineHalfHeight;

    // console.log('ed> ', (lineOb).endX, ((lineOb).endNode).css('margin-left'), (lineOb).endY,((lineOb).endNode).css('margin-top') );

    lineOb.distance = Math.sqrt(
      (lineOb.endX - lineOb.startX) * (lineOb.endX - lineOb.startX) +
        (lineOb.endY - lineOb.startY) * (lineOb.endY - lineOb.startY),
    );
    lineOb.distance = lineOb.distance + lineOb.height;

    lineOb.angle =
      (Math.atan2(lineOb.endY - lineOb.startY, lineOb.endX - lineOb.startX) *
        180) /
      Math.PI;
    lineOb.name = "line-" + lineOb.startID + "-" + lineOb.endID;
  },
  drawRect: function (lineOb, axn, nam) {
    var ob = this.ob;
    var e = $(ob.activity_area);
    var $lines = e.find(".lines");
    var obj = lineOb;
    $lines.append('<div class="line" id="' + obj.name + '"><div>');
    rect = $lines.find("#" + obj.name);
    if (axn == "draw") {
      rect.css({
        top: obj.startY + "px",
        left: obj.startX + "px",
        width: obj.distance + "px",
        height: obj.height + "px",
        transform: "rotate(" + obj.angle + "deg)",
      });
      rect.css({
        "transform-origin":
          ob.transformPerc + "px" + " " + (ob.transformPerc + "px") + " 0px",
      });
    }
    rect.css({ "border-color": obj.color });
    rect.css({ "background-color": obj.color });
    //    rect.css({"border-color":ob.lineColor});
    //    rect.css({"background-color":ob.lineColor});
    rect.css({ display: "block" });
  },
  validate: function () {
    var ob = this.ob;
    var $area = $(ob.activity_area);
    var self = this;
    var dataQuestion = ob.data_obj.questions;

    ob.dropConnections = [];
    ob.resultArr = [];
    ob.correctCount = 0;
    ob.wrongCount = 0;
    var numOfDrops = dataQuestion.drops.length;
    for (var dp = 0; dp < numOfDrops; dp++) {
      ob.dropConnections[dp] = [];
    }
    for (var ll = 0; ll < ob.lineObjects.length; ll++) {
      var tOb = ob.lineObjects[ll];
      var dropElement =
        tOb.startElement == "dropPoint" ? tOb.startID : tOb.endID;
      var dragElement = dropElement == tOb.startID ? tOb.endID : tOb.startID;
      var dropArr = dropElement.split("_");
      var dragArr = dragElement.split("_");
      var correctAns = dataQuestion.drops[parseInt(dropArr[2]) - 1].answer;
      ob.dropConnections[parseInt(dropArr[2]) - 1].push(parseInt(dragArr[2]));

      if (correctAns.length > 0) {
        var isAns =
          $.inArray(parseInt(dragArr[2]), getIntArray(correctAns)) >= 0;
        tOb.color = isAns ? "green" : "red";
        ob.lineObjects[ll].color = tOb.color;
        $area
          .find("#" + tOb.name)
          .css({ "border-color": tOb.color, "background-color": tOb.color });
      }
    }
    for (var dp1 = 0; dp1 < numOfDrops; dp1++) {
      var thisIsCorr = compareArrays(
        ob.dropConnections[dp1],
        dataQuestion.drops[dp1].answer,
      );
      if (
        ob.dropConnections[dp1][0] == undefined &&
        dataQuestion.drops[dp1].answer[0] == "0"
      ) {
        thisIsCorr = true;
      }
      if (thisIsCorr) {
        ob.correctCount++;
        ob.resultArr[dp1] = 1;
      } else {
        ob.wrongCount++;
        ob.resultArr[dp1] = 0;
      }
    }

    // ============ التعديل الوحيد هون: 'draw' بدل 'all' ============
    // 'all' كانت بتقفل كل العُقد (cursor:default) وتمنع أي تعديل بعد التشيك.
    // 'draw' بس بتصفّي لون الحدود (border) بدون ما تلمس الـ cursor ولا بيانات الاتصال.
    self.resetNodes("draw", false);
    // ================================================================

    self.showIcons(true, ob.resultArr);
    var allCorrect = ob.correctCount == numOfDrops && ob.wrongCount == 0;
    showFeedback(true, allCorrect);
  },

  showIcons: function (aBoo, aResult) {
    var ob = this.ob;
    var $area = $(ob.activity_area);
    $area.find(".drop").each(function () {
      var thisDrp = parseInt($(this).attr("id").split("_")[2]) - 1;
      if (aBoo) {
        $(this).find(".icon_wrap").css("display", "block");
        if (aResult[thisDrp] == 1) {
          $(this).find(".tick").css("display", "block");
        } else {
          $(this).find(".cross").css("display", "block");
        }
      } else {
        $(this).find(".icon_wrap").css("display", "none");
        $(this).find(".tick").css("display", "none");
        $(this).find(".cross").css("display", "none");
      }
    });
  },
  resetNodes: function (aVal, aBoo) {
    var ob = this.ob;
    var $area = $(ob.activity_area);
    clearInterval(ob.setI);

    $area.find(".node").each(function (e) {
      $(this).css("background-color", ob.nodeColor);
      if (aVal == "all") {
        if (aBoo) {
          $(this).css("cursor", "pointer");
          $(this).data("connected", "");
        } else {
          $(this).css("cursor", "default");
        }
        $(this).css("border-color", "transparent");
      } else {
        $(this).css("border-color", "transparent");
      }
    });
  },

  reset: function () {
    var self = this;
    var ob = this.ob;
    var $area = $(ob.activity_area);
    $area.find(".lines").empty();
    ob.lineObjects = [];
    self.showIcons(false, []);
    self.resetNodes("all", true);
    ob.startDraw = false;
    ob.dropConnections = [];
    ob.resultArr = [];
    ob.correctCount = 0;
    ob.wrongCount = 0;
  },
  initialSettings: function () {
    this.reset();
    initialSettingsDone(1);
  },
};
