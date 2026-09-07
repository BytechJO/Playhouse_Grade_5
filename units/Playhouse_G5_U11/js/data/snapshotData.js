var snapshot_data = {
  snapshot: [
    {
      audio: [
        "../audios/page_96/pizza.mp3",
        "../audios/page_96/dough.mp3",
        "../audios/page_96/sauce.mp3",
        "../audios/page_96/sprinkle.mp3",
        "../audios/page_96/cheese.mp3",
        "../audios/page_96/add.mp3",
        "../audios/page_96/pepperoni.mp3",
        "../audios/page_96/slice.mp3",
      ],
      image: [
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word2.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word3.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word4.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word5.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word6.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word7.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word8.png",
      ],
      word: [
        "<span>pizza</span>",
        "<span>dough</span>",
        "<span>sauce</span>",
        "<span>sprinkle</span>",
        "<span>cheese</span>",
        "<span>add</span>",
        "<span>pepperoni</span>",
        "<span>slice</span>",
      ],
      imagePlacePos: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 0, 1],
      ],
    },
  ],
  popuptitle: "What I Want To Know:",
};

var snapshotPopup_data =
  "<ul><li>What are the people doing?</li><li>Who are the pizzas for?</li><li>What toppings go on a pizza?</li></ul>";

var Popups_data = {
  slides: [
    {
      listen: {
        backgroundImage: "../images/pages/page-1/1-word-background.png",
        mainTitle: "../images/pages/page-1/1-title.png",
        titleTexts: ["<span class='blue_text'>2</span> Read."],
        titleIcons: ["../images/pages/page-1/q-1-icon-3-new.png"],
        titlesAudio: [
          "../audios/page_96/Pg4_1.2_Adult_Lady.mp3",
          "../audios/page_96/Pg4_1.3_Adult Lady.mp3",
          "../audios/page_96/Pg4_1.4_Adult Lady.mp3",
        ],
        image: [
          "../images/pages/snapshots/page-1/popup-3-elem-1.png",
          "../images/pages/snapshots/page-1/popup-3-elem-2.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
          "../images/pages/snapshots/page-1/popup-3-elem-1.png",
          "../images/pages/snapshots/page-1/popup-3-elem-2.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
          "../images/pages/snapshots/page-1/popup-3-elem-1.png",
          "../images/pages/snapshots/page-1/popup-3-elem-2.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
        ],
        words: [
          "1 'She/He isn’t here right now.'",
          "2 'May I speak with ...'",
          "3 'Who is calling, please?'",
          "4 'May I take a message?'",
          "5 'Is ... there?'",
          "6  'One moment, please.'",
          "7 'Speaking.'",
          "8 phone number",
          "9 wrong number",
          "10 hang up",
          "11 'It's busy.'",
          "12 dial",
        ],
        audio: [
          "../audios/page_96/1_She-He_isnt_here_right_now.mp3",
          "../audios/page_96/2_May_I_speak_with.mp3",
          "../audios/page_96/3_Who_is_calling_please.mp3",
          "../audios/page_96/4_May_I_take_a_message.mp3",
          "../audios/page_96/5_Is__there.mp3",
          "../audios/page_96/6_One_moment_please.mp3",
          "../audios/page_96/7_Speaking.mp3",
          "../audios/page_96/8_phone_number.mp3",
          "../audios/page_96/9_wrong_number.mp3",
          "../audios/page_96/10_hang_up.mp3",
          "../audios/page_96/11_Its_busy.mp3",
          "../audios/page_96/12_dial.mp3",
        ],
      },
      listen2: {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        mainTitle: "../images/pages/page-1/1-title.png",
        titleTexts: ["<span class='blue_text'>3</span> Ask and answer."],
        titleIcons: [""],
        titleTextRight: "<span class='blue_text'></span>",
        titlesAudio: ["../audios/new/p96ask.mp3"],
        image: [
          "../images/pages/page-1/2-img-1.png",
          "../images/pages/page-1/2-img-2.png",
        ],
        audio: [
          "../audios/page_96/Pg5_2.2_Adult Lady.mp3",
          "../audios/page_96/Pg5_2.3_Adult Lady.mp3",
        ],
      },
      listen3: {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        mainTitle: "../images/pages/page-1/1-title.png",
        mainTitle_audio: "../audios/page_96/WORD_POWER.mp3",
        titleTexts: ["<span class='title-order'>1</span> Listen and say."],
        titleIcons: [""],
        titleTextRight:
          "<span class='blue_text'>How often do you call your friends? Whom do your parents call, and what do they say?</span>",
        titlesAudio: ["../audios/page_96/1_Listen_and_say.mp3"],
        image: [],
        audio: [
          "../audios/p32/Pg5_2.2_Adult Lady.mp3",
          "../audios/p32/Pg5_2.3_Adult Lady.mp3",
        ],
      },
    },
  ],
  class_name: ["", "", "", "", "", "", "", "", "", "", "", ""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  words: [
    "'She/He isn’t here right now.'",
    "'May I speak with ...'",
    "'Who is calling, please?'",
    "'May I take a message?'",
    "'Is ... there?'",
    "'One moment, please.'",
    "'Speaking.'",
    "phone number",
    "wrong number",
    "hang up",
    "'It's busy.'",
    "dial",
  ],
  points: [
    "../images/pages/page-1/intro-1.png",
    "../images/pages/page-1/intro-2.png",
    "../images/pages/page-1/intro-3.png",
    "../images/pages/page-1/intro-4.png",
    "../images/pages/page-1/intro-5.png",
    "../images/pages/page-1/intro-6.png",
    "../images/pages/page-1/intro-7.png",
    "../images/pages/page-1/intro-8.png",
    "../images/pages/page-1/intro-9.png",
    "../images/pages/page-1/intro-10.png",
    "../images/pages/page-1/intro-11.png",
    "../images/pages/page-1/intro-12.png",
  ],
  postions: [
    "left: 25%; top: 14%;",
    "left: 15%; top: 23%;",
    "left: 23%; top: 25%;",
    "left: 38%; top: 22%;", //4
    "left: 49%; top: 28%;", //5
    "left: 57%; top: 23%;", //6
    "left: 72%; top: 23%;", //7
    "left: 37%; top: 50%;", //8
    "left: 49%; top: 65%;", //9
    "left: 52%; top: 83%;", //10
    "left: 10%; top: 53%;",
    "left: 16%; top: 57%;",
  ],
  imagesAudio: [
    "../audios/page_96/1_She-He_isnt_here_right_now.mp3",
    "../audios/page_96/2_May_I_speak_with.mp3",
    "../audios/page_96/3_Who_is_calling_please.mp3",
    "../audios/page_96/4_May_I_take_a_message.mp3",
    "../audios/page_96/5_Is__there.mp3",
    "../audios/page_96/6_One_moment_please.mp3",
    "../audios/page_96/7_Speaking.mp3",
    "../audios/page_96/8_phone_number.mp3",
    "../audios/page_96/9_wrong_number.mp3",
    "../audios/page_96/10_hang_up.mp3",
    "../audios/page_96/11_Its_busy.mp3",
    "../audios/page_96/12_dial.mp3",
  ],
};
