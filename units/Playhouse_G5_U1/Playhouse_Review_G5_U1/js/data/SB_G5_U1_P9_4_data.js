var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(87, 91, 160)",
  type: "text",
  playListData: [{ url: "" }, { url: "" }, { url: "" }, { url: "" }],
};
var fillin_data = {
  layout: 2,
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    "<span class='green_text'>4</span> Write it! Use a dictionary and write the guide words at the top of the page for each word.",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",
  image: "",
  imageposition: "back",
  options: [],
  optionsAudios: [],

  // ------------------------------------------------------------------ //
  // جدولين جنب بعض، كل جدول إله عمود Word (ثابت) وعمود Guide Words (فراغ).
  // الترقيم بيكمل عبر الجدولين تلقائياً (equipment=1, helmet=2, nervous=3, limit=4)
  // ------------------------------------------------------------------ //
  tables: [
    {
      headings: ["Word", "Guide Words"],
      headingsAudio: ["../audios/under.mp3", "../audios/under.mp3"],
      rows: [{ word: "equipment" }, { word: "helmet" }],
    },
    {
      headings: ["Word", "Guide Words"],
      headingsAudio: ["../audios/under.mp3", "../audios/under.mp3"],
      rows: [{ word: "nervous" }, { word: "limit" }],
    },
  ],

  // ------------------------------------------------------------------ //
  // ترتيب الأسئلة هون لازم يطابق ترتيب الصفوف فوق بالضبط:
  // 1. equipment  2. helmet  3. nervous  4. limit
  // "answer" هون مثال فقط - لازم تحطوا الـ guide words الصح الفعلية
  // (بتعتمد عالقاموس المستخدم بالمدرسة).
  // ------------------------------------------------------------------ //
  questions: [
    {
      audio: "",
      audioenable: "default",
      answer: ["ability-exact"], // مثال - عدّلوها
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },
    {
      audio: "",
      audioenable: "default",
      answer: ["helmet-hero"], // مثال - عدّلوها
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },
    {
      audio: "",
      audioenable: "default",
      answer: ["nervous-nest"], // مثال - عدّلوها
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },
    {
      audio: "",
      audioenable: "default",
      answer: ["limit-line"], // مثال - عدّلوها
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 50,
      type: "text",
    },
  ],
};
