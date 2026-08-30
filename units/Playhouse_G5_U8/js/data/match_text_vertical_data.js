var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(87, 91, 160)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p29/2.mp3",
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
  mainTitle: "../images/pages/sb-icons/lang-build.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleIconPos: { right: "60px" },
  mainTitleAudio: "../audios/p29/WORD_POWER.mp3",
  subTitleTextLeft: '<span class="title-order">4</span>  Match it!',
  subTitleTextRight:
    "Read the words and fill in the boxes. Then match them to their definitions.",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/p29/2_Match_it!_Match_each_Word_Power_word_to_its_definition.mp3",
  image: "",
  connect: "multiple", // single (or) multiple
  linecolor: "#217cf2ff",
  path: "line",
  strokewidth: "4",
  nodecolor: "#6e9beeff",
  nodeselectioncolor: "#217cf2ff",
  questions: {
    drags: [
      {
        text: "<div class='word_box'>full of beauty</div>",
        image: "no",
        audio: "../audios/p29/under.mp3",
        audioenable: "default", // correct (or) default
      },
      {
        text: "<div class='word_box'>full of flavour</div>",
        image: "no",
        audio: "../audios/p29/under.mp3",
        audioenable: "default", // correct (or) default
      },
      {
        text: "<div class='word_box'>full of joy</div>",
        image: "no",
        audio: "../audios/p29/under.mp3",
        audioenable: "default", // correct (or) default
      },
      {
        text: "<div class='word_box'>full of sorrow</div>",
        image: "no",
        audio: "../audios/p29/under.mp3",
        audioenable: "default", // correct (or) default
      },
      {
        text: "<div class='word_box'>full of pain</div>",
        image: "no",
        audio: "../audios/p29/under.mp3",
        audioenable: "default", // correct (or) default
      },
      {
        text: "<div class='word_box'>full of care</div>",
        image: "no",
        audio: "../audios/p29/under.mp3",
        audioenable: "default", // correct (or) default
      },
    ],
    drops: [
      {
        text: "<div class='word_box'>beauty</div> &darr; <div class='word_box'>beautiful</div>",
        image: "no",
        answer: [1],
        audio: "../audios/p29/under.mp3",
        audioenable: "default", // correct (or) default
      },
      {
        text: "<div class='word_box'>joy</div> &darr; <div class='word_box'>joyful</div>",
        image: "no",
        answer: [3],
        audio: "../audios/p29/under.mp3",
        audioenable: "default", // correct (or) default
      },
      {
        text: "<div class='word_box'>pain</div> &darr; <div class='word_box'>painful</div>",
        image: "no",
        answer: [5],
        audio: "../audios/p29/under.mp3",
        audioenable: "default", // correct (or) default
      },
    ],
  },
};
