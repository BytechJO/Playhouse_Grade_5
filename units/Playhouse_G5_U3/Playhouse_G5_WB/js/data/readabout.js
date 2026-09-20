var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/P18/1.mp3",
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
var readabout_data = {
  mainTitle: "../images/pages/sb-icons/WRITING.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/P18/WRITING.mp3",
  subTitleTextLeft:
    '<span class="blue_text">1</span>   Read about it!  Read the following story about volunteer work. Circle the main idea and underline the supporting statements. Write the supporting statements in the boxes.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/P18/1_Read_about_it!_Read_the_following_story_about_volunteer_work_Circle_the_main_idea_and.mp3",
  activityheading: "",
  activityheading_audio: "../audios/p18/under.mp3",
  main_activityheading: "../images/pages/WRITING.jpg",
  main_activityheading_audio: "../audios/p18/under.mp3",
  activityicon: "../images/icons/key_icon.png",
  cloudTitle: "Hard Work and No Money",

  // كل جملة قابلة للنقر (متسلسلة: دائرة -> خط تحت -> بلا شي)
  "cloudSentences": [
    "Every year thousands of young people in Britain finish school and then spend the summer helping people.",
    "Some young people go to other countries and work as volunteers.",
    "Volunteers give their time to help people.",
    "They work in schools or hospitals, or they help with conservation."
  ],

  // رقم الجملة (index) يلي هي "الفكرة الرئيسية" - لازم تِنحاط عليها دائرة
  "mainIdeaIndex": 0,

  // أرقام الجمل يلي هي "جمل داعمة" - لازم يِنحط تحتها خط
  // وبنفس الوقت هي الإجابات الصحيحة للمربعات التلاتة تحت (بترتيب حر)
  "supportingIndices": [1, 2, 3],

  // مواضع المربعات فقط بتتحكم بمكانها بالتخطيط (CSS) - مش مرتبطة
  // بجملة معينة، فأي مربع يقدر ياخد أي جملة داعمة صحيحة
  boxes: [
    { position: "left" },
    { position: "right" },
    { position: "bottom" },
  ],
};