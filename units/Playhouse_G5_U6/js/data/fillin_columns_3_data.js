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
    "numinrow"              : [[1,1,1]],
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/under.mp3",
    "mainTitleIconPos"      : {"right": "90px"},
    "subTitleTextLeft"      : '<span class="title-order">1</span> Match it!',
    "subTitleTextRight"     : "Rewrite the sentences from the previous matching question below.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "defaultAnswer"         : -1,
    "image"                 : "",
    "options"               : [],
    "optionsAudios"         : [],
    "questions": [{
            "textfront": "",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Right now, we are in our classroom"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["In the past, there were dinosaurs"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
          "textfront": "",
          "audio": "../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["In the future, our world may look different"],
          "strictcase": "no", // yes (or) no 
          "type": "text", // text (or) number
      },
      
    ]
}