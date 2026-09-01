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
  mainTitle: "../images/pages/sb-icons/conv_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/page_89/CONVERSATION.mp3",
  subTitleTextLeft: '<span class="title-order">3</span> Discuss it!',
  subTitleTextRight:
    "In groups, discuss what you would say in a restaurant if you got food that did not taste that good. Use the Word Power words to describe how your meal tasted.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p92axnswer.mp3",
  defaultAnswer: -1,
  image: "",
  questions: [
    {
      textfront: "",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [
        "The soup didn't have any spices. I think that you might have forgotten to add spices to the soup.",
      ],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [
        "The chicken was burnt. Maybe you left the chicken in the oven too long, because it tasted burnt.",
      ],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [
        "Yes, the food was cold. Also, it would be better if you could serve the food as soon as it is cooked.",
      ],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
  ],
};
