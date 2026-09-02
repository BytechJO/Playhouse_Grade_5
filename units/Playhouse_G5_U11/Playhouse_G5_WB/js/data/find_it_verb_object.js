var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  playListData: [
    {
      audiourl: "../audios/P56/1.mp3",
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

var find_it_verb_object_data = {
  mainTitle: "../images/pages/sb-icons/grammer_main_title.png",
  mainTitleIcon: "",
  mainTitleAudio: "../audios/p56/GRAMMAR.mp3",
  mainTitleIconPos: { right: "68px" },
  subTitleTextLeft:
    "<span class='title-order'>1</span> Find it! Circle the indirect object in each sentence. Underline the direct object in each sentence.",

  subTitleAudio:
    "../audios/p56/1_Find_it!_Circle_the_indirect_object_in_each_sentence_Underline_the_direct_object_in_each_sentence.mp3",
  subTitleTextRight: "",
  subTitleIcons: [],
  instruction: "",
  instructionAudio: "../audios/p56/.mp3",

  // كل جملة = مصفوفة "chunks". كل chunk قابل للنقر لتطبيق الأداة المختارة عليه.
  // correctStyle: "circle" (الفعل) | "underline" (المفعول المباشر) | "check" (المفعول الغير مباشر) | null (بدون)
sentences: [
  [
    { text: "Can you", correctStyle: null },
    { text: "give", correctStyle: null },
    { text: "me", correctStyle: "circle" },
    { text: "your new laptop?", correctStyle: "underline" },
  ],
  [
    { text: "I", correctStyle: null },
    { text: "baked", correctStyle: null },
    { text: "you", correctStyle: "circle" },
    { text: "a birthday cake.", correctStyle: "underline" },
  ],
  [
    { text: "Please", correctStyle: null },
    { text: "pass", correctStyle: null },
    { text: "me", correctStyle: "circle" },
    { text: "the salt.", correctStyle: "underline" },
  ],
  [
    { text: "I", correctStyle: null },
    { text: "bought", correctStyle: null },
    { text: "my mum", correctStyle: "circle" },
    { text: "a gift on Mother's Day.", correctStyle: "underline" },
  ],
  [
    { text: "The teacher", correctStyle: null },
    { text: "told", correctStyle: null },
    { text: "the class", correctStyle: "circle" },
    { text: "a story.", correctStyle: "underline" },
  ],
  [
    { text: "My friend", correctStyle: null },
    { text: "wrote", correctStyle: null },
    { text: "me", correctStyle: "circle" },
    { text: "a letter.", correctStyle: "underline" },
  ],
  [
    { text: "Can I", correctStyle: null },
    { text: "buy", correctStyle: null },
    { text: "Lisa", correctStyle: "circle" },
    { text: "a new toy?", correctStyle: "underline" },
  ],
  [
    { text: "I", correctStyle: null },
    { text: "made", correctStyle: null },
    { text: "my mum", correctStyle: "circle" },
    { text: "a cup of tea.", correctStyle: "underline" },
  ],
],
  // أدوات التصحيح المتاحة بالتولبار
  tools: [
    { style: "circle", label: "Circle the indirect object" },
    { style: "underline", label: "Underline the direct object" },
    // { style: "check", label: "Check the indirect object" },
  ],
};
