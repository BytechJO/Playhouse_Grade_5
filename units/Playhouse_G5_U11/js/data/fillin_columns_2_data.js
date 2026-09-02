var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(87, 91, 160)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/demo.mp3',
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
var fillin_data = {    
    "layout"                : 1,
    "numinrow"              : [[1,1,1,1]],
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/new/GRAMMAR_PRACTICE.mp3",
    "mainTitleIconPos"      : {"right": "70px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> Write it!',
    "subTitleTextRight"     : "Change each sentence by adding an indirect object to it.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p99write.mp3",
    "defaultAnswer"         : 1,
    "image"                 :"",
    "questions": [{
            "textfront": "I bought a new mobile phone.",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["I bought my mum a new mobile phone."],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "She told a story.",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": [""],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
          "textfront": "My cousin drove to the cinema.",
          "audio": "../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": [""],
          "strictcase": "no", // yes (or) no 
          "type": "text", // text (or) number
      },
      {
        "textfront": "Fred wrote a letter.",
        "audio": "../audios/under.mp3",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": [""],
        "strictcase": "no", // yes (or) no 
        "type": "text", // text (or) number
    },
    ]
}