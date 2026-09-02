var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/p57/1.mp3',
        },
        {
          'url': '',
        },
        {
          'url': '',
        },
        {
          'url': '',
        }
    ],
}


var fillcircleword_data = {
  mainTitle: "../images/pages/sb-icons/LANGUAGE_BUILDING.jpg",
  mainTitleIcon: "../images/pages/sb-icons/word_main_title_icon.png",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/p57/LANGUAGE_BUILDING.mp3",
  subTitleTextLeft:
    "<span class='blue_text'>2</span>  Write it!  Fill in the blanks using <b>‘good'</b> or <b>‘well'</b>. Circle the noun/verb it modifies.",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/p57/2_Write_it!_Fill_in_the_blanks_using_‘good'_or_‘well'_Circle_the_noun-verb_it_modifies.mp3",

  strictcase: "no",
  maxlength: 10,

  /*
       Each sentence is split into "words". Every word has a "type":
       "none"   -> plain, non-interactive text
       "blank"  -> a text input the student fills with "good" or "well"
       "circle" -> the ONE word (noun or verb) that answer modifies -
                   click it to circle it
    */
  questions: [
    {
      answer: "well",
      words: [
        { text: "I", type: "none" },
        { text: "washed", type: "circle" },
        { text: "the", type: "none" },
        { text: "dishes", type: "none" },
        { type: "blank" },
        { text: ".", type: "none" },
      ],
    },
    {
      answer: "well",
      words: [
        { text: "Amy", type: "none" },
        { text: "speaks", type: "circle" },
        { text: "English", type: "none" },
        { text: "very", type: "none" },
        { type: "blank" },
        { text: ".", type: "none" },
      ],
    },
    {
      answer: "good",
      words: [
        { text: "Lilly", type: "none" },
        { text: "always", type: "none" },
        { text: "gets", type: "none" },
        { text: "really", type: "none" },
        { type: "blank" },
        { text: "marks", type: "circle" },
        { text: ".", type: "none" },
      ],
    },
    {
      answer: "good",
      words: [
        { text: "Yoshi", type: "none" },
        { text: "takes", type: "none" },
        { type: "blank" },
        { text: "photographs", type: "circle" },
        { text: ".", type: "none" },
      ],
    },
    {
      answer: "well",
      words: [
        { text: "Jenny", type: "none" },
        { text: "writes", type: "circle" },
        { type: "blank" },
        { text: ".", type: "none" },
      ],
    },
    {
      answer: "good",
      words: [
        { text: "Max", type: "none" },
        { text: "is", type: "none" },
        { text: "a", type: "none" },
        { type: "blank" },
        { text: "artist", type: "circle" },
        { text: ".", type: "none" },
      ],
    },
    {
      answer: "well",
      words: [
        { text: "I", type: "none" },
        { text: "don't", type: "none" },
        { text: "feel", type: "circle" },
        { type: "blank" },
        { text: ",", type: "none" },
        { text: "so", type: "none" },
        { text: "I'm", type: "none" },
        { text: "going", type: "none" },
        { text: "to", type: "none" },
        { text: "the", type: "none" },
        { text: "doctor.", type: "none" },
      ],
    },
    {
      answer: "well",
      words: [
        { text: "When", type: "none" },
        { text: "the", type: "none" },
        { text: "football", type: "none" },
        { text: "team", type: "none" },
        { text: "plays", type: "circle" },
        { type: "blank" },
        { text: ",", type: "none" },
        { text: "they", type: "none" },
        { text: "always", type: "none" },
        { text: "win.", type: "none" },
      ],
    },
    {
      answer: "good",
      words: [
        { text: "Susan", type: "none" },
        { text: "took", type: "none" },
        { text: "cooking", type: "none" },
        { text: "classes.", type: "none" },
        { text: "She's", type: "none" },
        { text: "a", type: "none" },
        { type: "blank" },
        { text: "cook.", type: "circle" },
      ],
    },
    {
      answer: "good",
      words: [
        { text: "When", type: "none" },
        { text: "you", type: "none" },
        { text: "are", type: "none" },
        { text: "tired,", type: "none" },
        { text: "you", type: "none" },
        { text: "need", type: "none" },
        { text: "a", type: "none" },
        { type: "blank" },
        { text: "night's", type: "none" },
        { text: "sleep.", type: "circle" },
      ],
    },
  ],
};
