var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/P12/2.mp3',
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

var sentencecheck_data = {
  mainTitle: "../images/pages/sb-icons/LANGUAGE_BUILDING.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/p12/LANGUAGE_BUILDING.mp3",

  subTitleTextLeft: '<span class="title-order">2</span> <b>Write it!</b>',
  subTitleTextRight:
    "Are these sentences correct? Read the sentences and put a check if the sentence is correct and a cross if the sentence is not correct. Then rewrite the incorrect sentences.",
  subTitleAudio:
    "../audios/p12/2_Write_it!_Are_these_sentences_correct_Read_the_sentences_and_put_a_if_the_sentence_is_correct.mp3",

  // ------------------------------------------------------------------ //
  // iscorrect: "yes" -> الجملة أصلاً صح (مش لازم يكتب إعادة صياغة).
  // iscorrect: "no"  -> الجملة غلط، لازم يحط X ويكتب الجملة المصححة
  // بالخط تحتها. correctedSentence مثال بس - راجعوها.
  // ------------------------------------------------------------------ //
  questions: [
    {
      sentence:
        "He used to play jogging every day when he lived in the country.",
      sentenceAudio: "",
      iscorrect: "no",
      correctedSentence: [
        "He used to go jogging every day when he lived in the country.",
      ],
      alternatecorrected: [[]],
      strictcase: "no",
      maxlength: 150,
    },
    {
      sentence: "I love to go football at the weekends with my cousins.",
      sentenceAudio: "",
      iscorrect: "no",
      correctedSentence: [
        "I love to play football at the weekends with my cousins.",
      ],
      alternatecorrected: [[]],
      strictcase: "no",
      maxlength: 150,
    },
    {
      sentence:
        "My mum says that if we play chess, we will improve our brainpower.",
      sentenceAudio: "",
      iscorrect: "yes",
      correctedSentence: [""],
      alternatecorrected: [[]],
      strictcase: "no",
      maxlength: 150,
    },
    {
      sentence: "We go swimming at the pool on Saturdays.",
      sentenceAudio: "",
      iscorrect: "yes",
      correctedSentence: [""],
      alternatecorrected: [[]],
      strictcase: "no",
      maxlength: 150,
    },
    {
      sentence:
        "One way to exercise is to go walking. Going walking is good for better health.",
      sentenceAudio: "",
      iscorrect: "no",
      correctedSentence: [
        "One way to exercise is to go walking. Walking is good for your health.",
      ],
      alternatecorrected: [[]],
      strictcase: "no",
      maxlength: 150,
    },
  ],
};
