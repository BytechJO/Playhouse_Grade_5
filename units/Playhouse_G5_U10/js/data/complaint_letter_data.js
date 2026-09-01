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

var complaint_letter_data = {
  mainTitle: "../images/pages/sb-icons/writing.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_3_icon.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/page_94/WRITING.mp3",
  // ===== قسم 1: Read about it =====
  section1: {
    numberIcon: "1",
    title: '<span class="title-order">1</span> Read about it!',
    titleAudio: "../audios/page_xx/read_about_it.mp3",
    instruction: "Read the letter of complaint below.",
    instructionAudio: "../audios/page_xx/read_letter.mp3",
    letter: {
      date: "20 January, 2019",
      salutation: "Dear Restaurant Manager,",

      // كل فقرة = مصفوفة "chunks". كل chunk هو جزء من الجملة ممكن الطالب
      // يدوس عليه ليطبّق الأداة المفعّلة (circle / underline / box).
      // correctStyle: null => ما لازم ينعلّم عليه إطلاقًا (لو التصحيح مفعّل).
      // بدّل correctStyle حسب مفتاح الإجابة الفعلي عندك.
      paragraphs: [
        [
          {
            text: "On 18th January, my family and I visited your restaurant.",
            correctStyle: null,
          },
          {
            text: "We waited a very long time for our food.",
            correctStyle: "circle",
          },
          {
            text: "Did you know that the lemonade was sour and the vegetables were not fresh?",
            correctStyle: "circle",
          },
          { text: "They were also very salty.", correctStyle: "circle" },
          { text: "I could not eat them.", correctStyle: null },
        ],
        [
          {
            text: "My family and I love to eat at your restaurant,",
            correctStyle: "box",
          },
          {
            text: "but the last time was not as good as it usually is.",
            correctStyle: null,
          },
          {
            text: "Please talk to your chef about how he makes the food.",
            correctStyle: "underline",
          },
          {
            text: "Also, could you please tell him that he burnt the fish that my dad ordered.",
            correctStyle: "circle",
          },
        ],
        [
          {
            text: "Next time, we want the meal to be fresh, not salty and not burnt.",
            correctStyle: "underline",
          },
        ],
      ],
      closing: "Thank you,",
      signature: "Veronica",
    },
  },

  // ===== قسم 2: Find it =====
  section2: {
    numberIcon: "2",
    title: '<span class="title-order">2</span> Find it',
    titleIcon: "../images/icons/detective_boy.png",
    titleAudio: "../audios/page_xx/find_it.mp3",
    instruction:
      "Look at the example letter of complaint above, then choose a tool and click the sentences in the letter.",
    instructionAudio: "../audios/page_xx/look_at_example.mp3",
    tasksLeft: [
      {
        text: "Circle the details.",
        style: "circle",
        audio: "../audios/page_xx/circle_details.mp3",
      },
      {
        text: "Underline what Veronica wants the restaurant to do.",
        style: "underline",
        audio: "../audios/page_xx/underline_veronica.mp3",
      },
    ],
    tasksRight: [
      {
        text: "Put a box around the friendly sentence.",
        style: "box",
        audio: "../audios/page_xx/box_friendly.mp3",
      },
    ],
  },
};
