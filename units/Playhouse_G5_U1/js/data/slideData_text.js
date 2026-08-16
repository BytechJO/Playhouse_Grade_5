var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(87, 91, 160)",
  type: "slider",
  playListData: [
    {
      audiourl: "../audios/page_8/1.mp3",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
  ],
};
var reading_data = {
  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/adv_icon_1.png",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/page_8/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>1</span> Read about it!",
  subTitleTextRight: "Read the following text and discuss it with your group.",
  subTitleIcons: [""],
  subTitleAudio: "../audios/page_8/1_Read_about_it!.mp3",
  numberofcolumns: 1,
  slides: [
    {
      parent_class_name: "",
      mainImage: "../images/pages/activities/6.png",
      title: "<span class='blue_text'><b>Rollerblading</b></span>",
      array_text: [
        '<img src="../images/pages/activities/6.png" class="slide_inline_img" />' +
          "<br> Inline skating first started as a means for ice skaters to practise in the off-season." +
          "Extreme inline skating is known as rollerblading." +
          "<br> <b>Rollerblading</b> is a fun and sometimes dangerous sport. Rollerblading" +
          "has become popular around the world. Like most adventurous sports, it takes time to practise, to learn the basics and to be safe. You can find two types of extreme rollerblading.",
        "<br><b>Street skating</b>, also known as freestyle skating, the skater performs tricks by using common, everyday objects. They jump stairs and use" +
          "many things as ramps, rails and ledges. Confident skaters think creativity is the most important part of street skating, since skaters are able " +
          "to invent special tricks to do in an area or environment, rather than performing more standard tricks in a skatepark.",
        "<br><b>Park skating</b> refers to skating that goes on in skateparks. This style differs from street skating. " +
          "Skateparks are designed for skaters to do tricks, " +
          "for example, on the top of the ramp, or ‘coping’. A group of tricks connected together in a fluid motion" +
          "over different obstacles is known as a ‘line’. Skateparks often feature quarter " +
          "pipes and half pipes, curved ramps and other features that are not usually found in neighbourhoods or in the city." +
          "A great skatepark will have good lines—making it easier for skaters to perform tricks.",
      ],
    },
  ],
};

// ============================================================================
// سؤال "ضع دائرة على الإجابة" - بيظهر تحت الفقرة عبر buildMCQCircleBox()
// ============================================================================
var mcq_data = {
  title: "What is the main idea of this text?",
  titleAudio: "../audios/page_8/under.mp3",
  mascotImage: "../images/pages/activities/7.png", // بدّل المسار لصورة الضفدع الفعلية عندك
  questions: [
    {
      question: "",
      image: "",
      answer: [2], // الإجابة الصحيحة: b) Types of rollerblading
      audio: "no",
      audioenable: "default",
      options: [
        {
          text: "Rollerblading in skateparks",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "Types of rollerblading",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "How inline skating started",
          image: "",
          audio: "no",
          audioenable: "default",
        },
      ],
    },
  ],
};