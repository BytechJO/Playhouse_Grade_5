var stereo_data = {
  audio: "",
  exist: true,

  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p32/2.mp3",
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

var linedraw_data = {
  layout: 1,
  mainTitle: "../images/pages/sb-icons/LANGUAGE_BUILDING.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/p32/LANGUAGE_BUILDING.mp3",
  subTitleTextLeft: "<span class='title-order'>2</span> Find it!",
  subTitleTextRight:
    "Find the words that have opposite meanings. Draw a line to connect the antonyms.",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/p32/2_Find_it!_Find_the_words_that_have_opposite_meanings_Draw_a_line_to_connect_the_antonyms.mp3",

  connect: "single", // single (or) multiple
  linecolor: "#217cf2ff",
  path: "line",
  strokewidth: "4",
  nodecolor: "#6e9beeff",
  nodeselectioncolor: "#217cf2ff",

  // ============================================================
  // FREEFORM layout: every word gets its own {top,left} position
  // (in % of the surrounding container) instead of being stacked
  // in the usual two vertical dragger / droppers columns.
  // A center image sits in the middle via "centerImage".
  // ============================================================
  freeform: true,
  centerImage: {
    src: "../images/pages/activities/1.jpg", // <-- replace with your actual uploaded image path
    top: "51%",
    left: "53%",
    width: "34%",
  },

  questions: {
    // one word from EACH antonym pair goes here (role = "drag").
    // Position is exactly where that word sits in the reference image.
    drags: [
      {
        text: "awake",
        image: "no",
        audio: "no",
        audioenable: "default",
        position: { top: "12%", left: "32%" },
      },
      {
        text: "stop",
        image: "no",
        audio: "no",
        audioenable: "default",
        position: { top: "12%", left: "60%" },
      },
      {
        text: "large",
        image: "no",
        audio: "no",
        audioenable: "default",
        position: { top: "27%", left: "83%" },
      },
      {
        text: "sad",
        image: "no",
        audio: "no",
        audioenable: "default",
        position: { top: "45%", left: "17%" },
      },
      {
        text: "open",
        image: "no",
        audio: "no",
        audioenable: "default",
        position: { top: "62%", left: "15%" },
      },
      {
        text: "early",
        image: "no",
        audio: "no",
        audioenable: "default",
        position: { top: "77%", left: "18%" },
      },
    ],
    // the OTHER word of each pair (role = "drop"), also positioned
    // exactly where it sits in the reference image. "answer" points
    // at the 1-based index of its matching drag above.
    drops: [
      {
        text: "asleep",
        image: "no",
        answer: [1], // matches "awake"
        audio: "no",
        audioenable: "default",
        position: { top: "27%", left: "19%" },
      },
      {
        text: "go",
        image: "no",
        answer: [2], // matches "stop"
        audio: "no",
        audioenable: "default",
        position: { top: "91%", left: "60%" },
      },
      {
        text: "small",
        image: "no",
        answer: [3], // matches "large"
        audio: "no",
        audioenable: "default",
        position: { top: "77%", left: "85%" },
      },
      {
        text: "happy",
        image: "no",
        answer: [4], // matches "sad"
        audio: "no",
        audioenable: "default",
        position: { top: "45%", left: "86%" },
      },
      {
        text: "closed",
        image: "no",
        answer: [5], // matches "open"
        audio: "no",
        audioenable: "default",
        position: { top: "62%", left: "89%" },
      },
      {
        text: "late",
        image: "no",
        answer: [6], // matches "early"
        audio: "no",
        audioenable: "default",
        position: { top: "91%", left: "28%" },
      },
    ],
  },
};
