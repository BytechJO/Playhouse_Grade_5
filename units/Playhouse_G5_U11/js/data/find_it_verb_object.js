var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(87, 91, 160)",
    "playListData" : [
        {
          'audiourl': '../audios/page_102/2.mp3',
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

var find_it_verb_object_data = {
  mainTitle: "../images/pages/sb-icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/page_98/GRAMMAR.mp3",
  mainTitleIconPos: { right: "80px" },
  subTitleTextLeft: "<span class='title-order'>2</span> Find it!",
  subTitleTextRight:
    "Read the each sentence and circle the verb. Then underline the direct object and  indirect object.",
  subTitleIcons: [],
  instruction:
    "",
  instructionAudio: "../audios/page_xx/instruction.mp3",

  // كل جملة = مصفوفة "chunks". كل chunk قابل للنقر لتطبيق الأداة المختارة عليه.
  // correctStyle: "circle" (الفعل) | "underline" (المفعول المباشر) | "check" (المفعول الغير مباشر) | null (بدون)
  sentences: [
    [
      { text: "The teacher", correctStyle: null },
      { text: "gave", correctStyle: "circle" },
      { text: "Sam", correctStyle: "check" },
      { text: "his telephone number.", correctStyle: "underline" },
    ],
    [
      { text: "Jack", correctStyle: null },
      { text: "left", correctStyle: "circle" },
      { text: "his mother", correctStyle: "check" },
      { text: "a message.", correctStyle: "underline" },
    ],
    [
      { text: "Becky", correctStyle: null },
      { text: "wrote", correctStyle: "circle" },
      { text: "her best friend", correctStyle: "check" },
      { text: "a note.", correctStyle: "underline" },
    ],
    [
      { text: "He", correctStyle: null },
      { text: "threw", correctStyle: "circle" },
      { text: "me", correctStyle: "check" },
      { text: "the ball.", correctStyle: "underline" },
    ],
    [
      { text: "My sister", correctStyle: null },
      { text: "painted", correctStyle: "circle" },
      { text: "our grandmother", correctStyle: "check" },
      { text: "a picture.", correctStyle: "underline" },
    ],
    [
      { text: "Rachel", correctStyle: null },
      { text: "handed", correctStyle: "circle" },
      { text: "her brother", correctStyle: "check" },
      { text: "the phone.", correctStyle: "underline" },
    ],
    [
      { text: "We", correctStyle: null },
      { text: "bought", correctStyle: "circle" },
      { text: "our grandmother", correctStyle: "check" },
      { text: "a present.", correctStyle: "underline" },
    ],
    [
      { text: "My dad", correctStyle: null },
      { text: "made", correctStyle: "circle" },
      { text: "us", correctStyle: "check" },
      { text: "some burgers.", correctStyle: "underline" },
    ],
  ],

  // أدوات التصحيح المتاحة بالتولبار
  tools: [
    { style: "circle", label: "Circle the verb" },
    { style: "underline", label: "Underline the direct object" },
    { style: "check", label: "Check the indirect object" },
  ],
};
