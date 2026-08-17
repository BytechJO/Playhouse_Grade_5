var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(87, 91, 160)",
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
var reading_data = {
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "100px" },
  mainTitleAudio: "../audios/page_19/under.mp3",
  subTitleTextLeft: "PLAYHOUSE NEWSLETTER",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/page_19/PLAYHOUSE_NEWSLETTER.mp3",
  slides: [
    {
      // "layout": "adventure_images_with_text",
      parent_class_name: "",

      mainImage: "../images/pages/news-letter/1-news-title.png",
      questionImage: "../images/pages/news-letter/1-conv-img.png",
      starImage: "../images/pages/news-letter/2-img-2-title.png",
      convImage: "../images/pages/news-letter/3-img-title.png",

      titleAudio: "../audios/page_19/Pg6_2.1_Stella.mp3",

      listen: {
        text: [
          "Crafting is fun and relaxing. When you see the <br>" +
            "results of your work, you become very proud. <br>" +
            "We are happy to announce the craft fair that <br>" +
            "will begin next month at Waritsat School. <br>" +
            "If you want to participate in this fair, you <br>" +
            "should start crafting like sewing, quilting, <br>" +
            "knitting, crocheting, hand painting, <br>" +
            "jewellery making or whatever your <br>" +
            "hobby may be. This will be a fun way <br>" +
            "to encourage the hobby of crafting in the new generation. <br>" +
            "Please bring the supplies and tools you <br>" +
            "used. They can be displayed with your work. <br>" +
            "If you are interested in participating, please <br>" +
            "contact us so that we can reserve a table at the <br>" +
            "crafting fair for you. <br>" +
            "Happy crafting!  <br>",
        ],
        audio: ["../audios/page_19/Waritsat_Craft_Fair.mp3"],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/1-news-title.png"], //
        second_image: ["../images/pages/news-letter/1-news-img.png"],
      },
      ///////////////////////////////////////////////////////////////////////////////////////////////////////// 2 //
      listen2: {
        text: [
          "<br>" +
            "<br>" +
            "<br>" +
            "<br>" +
            "Lilly and Max enjoy" +
            "sports and science which" +
            "are their favourite hobbies. Take a look" +
            "below at the facts about sports and science" +
            "that Lilly and Max found." +
            "<ul>" +
            "<li>Olympic gold medals are actually made mostly of silver.</li>" +
            "<li>Dimples on a golf ball help the ball fly further than a ball without dimples.</li>" +
            "<li>The official distance of a marathon is 42.195 kilometres.</li>" +
            "<li>Snowboarders and ice skaters glide on a thin layer of water as their skates and boards heat the snow beneath them.</li>" +
            "<li>Modern swimwear fabric and designs are actually faster through the water than human skin.</li>" +
            "</ul>",
        ],
        audio: ["../audios/page_19/Sports_Science_Facts.mp3"],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/2-img-title.png"],
        second_image: ["../images/pages/news-letter/2-img-2-title.png"],
      },
      ///////////////////////////////////////////////////////////////////////////////////////////////////////// 3 //
      listen3: {
        text: [
          "Look at the picture.",
          "What do you think they are saying?",
          "With a friend, act out the conversation! ",
        ],
        audio: [
          "../audios/page_19/Pg4_1.2_Adult_Lady.mp3",
          "../audios/page_19/Pg4_1.3_Adult Lady.mp3",
          "../audios/page_19/Pg4_1.4_Adult Lady.mp3",
        ],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/3-img.png"],
        second_image: ["../images/pages/news-letter/3-img-title.png"],
      },
      ///////////////////////////////////////////////////////////////////////////////////////////////////////// 4 //
      listen4: {
        title: "Can you remember your Word Power words?  There are 12.",
        audio: [
          "../audios/page_19/Pg4_1.2_Adult_Lady.mp3",
          "../audios/page_19/Pg4_1.3_Adult Lady.mp3",
          "../audios/page_19/Pg4_1.4_Adult Lady.mp3",
        ],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/1-conv-img.png"],
        second_image: [""],
        questions: [
          {
            singleword: false,
            text: "1.[_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default", // correct (or) default
            image: "",
            answer: ["martial arts"],
            alternateanswer: [[]],
            strictcase: "no", // yes (or) no
            strictorder: "yes", // yes (or) no
            maxlength: 500,
            type: "text", // text (or) number
          },
          {
            singleword: false,
            text: "2.[_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default", // correct (or) default
            image: "",
            answer: ["photography"],
            alternateanswer: [[]],
            strictcase: "no", // yes (or) no
            strictorder: "yes", // yes (or) no
            maxlength: 500,
            type: "text", // text (or) number
          },
          {
            singleword: false,
            text: "3.[_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default", // correct (or) default
            image: "",
            answer: ["video gaming"],
            alternateanswer: [[]],
            strictcase: "no", // yes (or) no
            strictorder: "yes", // yes (or) no
            maxlength: 500,
            type: "text", // text (or) number
          },
          {
            singleword: false,
            text: "4.[_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default", // correct (or) default
            image: "",
            answer: ["collecting"],
            alternateanswer: [[]],
            strictcase: "no", // yes (or) no
            strictorder: "yes", // yes (or) no
            maxlength: 500,
            type: "text", // text (or) number
          },
          {
            singleword: false,
            text: "5.[_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default", // correct (or) default
            image: "",
            answer: ["horse riding"],
            alternateanswer: [[]],
            strictcase: "no", // yes (or) no
            strictorder: "yes", // yes (or) no
            maxlength: 500,
            type: "text", // text (or) number
          },
          {
            singleword: false,
            text: "6.[_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default", // correct (or) default
            image: "",
            answer: ["sports"],
            alternateanswer: [[]],
            strictcase: "no", // yes (or) no
            strictorder: "yes", // yes (or) no
            maxlength: 500,
            type: "text", // text (or) number
          },
          {
            singleword: false,
            text: "7.[_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default", // correct (or) default
            image: "",
            answer: ["indoor games"],
            alternateanswer: [[]],
            strictcase: "no", // yes (or) no
            strictorder: "yes", // yes (or) no
            maxlength: 500,
            type: "text", // text (or) number
          },
          {
            singleword: false,
            text: "8.[_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default", // correct (or) default
            image: "",
            answer: ["travelling"],
            alternateanswer: [[]],
            strictcase: "no", // yes (or) no
            strictorder: "yes", // yes (or) no
            maxlength: 500,
            type: "text", // text (or) number
          },
          {
            singleword: false,
            text: "9.[_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default", // correct (or) default
            image: "",
            answer: ["fitness"],
            alternateanswer: [[]],
            strictcase: "no", // yes (or) no
            strictorder: "yes", // yes (or) no
            maxlength: 500,
            type: "text", // text (or) number
          },
          {
            singleword: false,
            text: "10.[_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default", // correct (or) default
            image: "",
            answer: ["sewing"],
            alternateanswer: [[]],
            strictcase: "no", // yes (or) no
            strictorder: "yes", // yes (or) no
            maxlength: 500,
            type: "text", // text (or) number
          },
          {
            singleword: false,
            text: "11.[_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default", // correct (or) default
            image: "",
            answer: ["musical instrument"],
            alternateanswer: [[]],
            strictcase: "no", // yes (or) no
            strictorder: "yes", // yes (or) no
            maxlength: 500,
            type: "text", // text (or) number
          },
          {
            singleword: false,
            text: "12.[_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default", // correct (or) default
            image: "",
            answer: ["birdwatching"],
            alternateanswer: [[]],
            strictcase: "no", // yes (or) no
            strictorder: "yes", // yes (or) no
            maxlength: 500,
            type: "text", // text (or) number
          },
        ],
      },
    },
  ],
};
