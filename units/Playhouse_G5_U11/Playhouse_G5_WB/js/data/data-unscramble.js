var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        { 'audiourl': '../audios/P56/2.mp3' },
        { 'url': '' }, { 'url': '' }, { 'url': '' }
    ],
}

var unscramble_data = {
    mainTitle: "../images/pages/sb-icons/grammer_main_title.png",
  mainTitleIcon: "",
  mainTitleAudio: "../audios/p56/GRAMMAR.mp3",
  mainTitleIconPos: { right: "68px" },
  subTitleTextLeft:
    "<span class='title-order'>2</span> Unscramble it!  Unscramble the words to make sentences. Then circle the direct objects and underline indirect objects.",

  subTitleAudio:
    "../audios/p56/2_Unscramble_it!_Unscramble_the_words_to_make_sentences_Then_circle_the_direct_objects_and.mp3",
  subTitleTextRight: "",
  subTitleIcons: [],
  instruction: "",
//   instructionAudio: "../audios/p56/.mp3",

    "questions" : [
        {
            "scrambled"       : "your toy show me",
            "answer"          : "Show me your toy",
            "alternateanswer" : [],
            // الكلمات يلي المفروض تنحط عليها دائرة (مفعول به مباشر)
            "directObjects"   : ["your", "toy"],
            // الكلمات يلي المفروض ينحط تحتها خط (مفعول به غير مباشر)
            "indirectObjects" : ["me"]
        },
        {
            "scrambled"       : "my mum I bought a card",
            "answer"          : "I bought my mum a card",
            "alternateanswer" : [],
            "directObjects"   : ["a", "card"],
            "indirectObjects" : ["my", "mum"]
        },
        {
            "scrambled"       : "us many gifts she gave",
            "answer"          : "She gave us many gifts",
            "alternateanswer" : [],
            "directObjects"   : ["many", "gifts"],
            "indirectObjects" : ["us"]
        }
    ]
};