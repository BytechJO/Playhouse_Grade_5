var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p18/1.mp3",
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
  mainTitleAudio: "../audios/p18/WRITING.mp3",
  subTitleTextLeft:
    '<span class="blue_text">1</span>   Read about it!  Read the following story about volunteer work. Circle the main idea and underline the supporting statements. Write the supporting statements in the boxes.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/p18/1_Read_about_it!_Read_the_following_story_about_volunteer_work_Circle_the_main_idea_and.mp3",
  activityheading: "",
  activityheading_audio: "../audios/p18/under.mp3",
  main_activityheading: "../images/pages/WRITING.jpg",
  main_activityheading_audio: "../audios/p18/under.mp3",
  activityicon: "../images/icons/key_icon.png",
  cloudTitle: "Hard Work and No Money",
  
    // Split into sentences so each one is individually clickable for the
    // "circle the main idea" interaction. Free selection only — no
    // "correct" sentence is stored, matching the boxes below.
    "cloudSentences"    : [
        "Every year thousands of young people in Britain finish school and then spend the summer helping people.",
        "Some young people go to other countries and work as volunteers.",
        "Volunteers give their time to help people.",
        "They work in schools or hospitals, or they help with conservation."
    ],
 
  // Free-writing boxes only — no answer key, nothing gets checked.
  // "position" just controls which CSS layout slot the box renders in
  // (see .rb_box_left / .rb_box_right / .rb_box_bottom in the CSS).
  boxes: [
    { position: "left", placeholder: "" },
    { position: "right", placeholder: "" },
    { position: "bottom", placeholder: "" },
  ],
};
