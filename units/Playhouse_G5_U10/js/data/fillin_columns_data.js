var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(87, 91, 160)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/demo.mp3",
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
var fillin_data = {
  layout: 1,
  numinrow: [[1, 1, 1]],
  mainTitle: "../images/pages/sb-icons/gramprac_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/page_91/G_GRAMMAR_PRACTICE.mp3",
  mainTitleIconPos: { right: "80px" },
  subTitleTextLeft: '<span class="title-order">1</span> Write it!',
  subTitleTextRight:
    "Choose the correct indirect question you would use in each of the situations below and write it on the line.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p91write.mp3",
  defaultAnswer: -1,
  image: "",
  questions: [
    {
      textfront: "You are in a restaurant and the food is late.",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Do you happen to know when the food will be served?"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "You don’t know where the salad bar is.",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Would you mind telling me where the salad bar is?"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "You want to know how much to pay for your meal.",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Could you please tell me how much it is?"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
  ],
  slides: [
    {
      layout: "grid_columns",

      mainImage: [""],
      parent_class_name: "LANGUAGE_BUILDING_2",
      group_styles: "",
      audio: [
        "../audios/Pg6_2.1_Stella.mp3",
        "../audios/dough.mp3",
        "../audios/sauce.mp3",
        "../audios/sprinkle.mp3",
        "../audios/cheese.mp3",
        "../audios/add.mp3",
        "../audios/pepperoni.mp3",
        "../audios/slice.mp3",
      ],
      word: [
        "<b>Direct Questions</b>",
        "<b>Indirect Questions</b>",

        "Where is the salad bar?",
        "Would you mind telling me where the salad bar is?",

        "When will the food be served?",
        "Do you happen to know when the food will be served?",

        "How much is it?",
        "Could you please tell me how much it is?",
      ],
      imagePlacePos: [
        { colWidth: [6, 6], colData: [1, 1] },
        { colWidth: [5, 7], colData: [1, 1] },
        { colWidth: [5, 7], colData: [1, 1] },
        { colWidth: [5, 7], colData: [1, 1] },
      ],
    },
  ],
};
