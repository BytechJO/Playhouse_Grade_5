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
    "numinrow"              : [[1,1]],
    "mainTitle"             : "../images/pages/sb-icons/reading.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/adv_icon_1.png",
    "mainTitleAudio"        : "../audios/page_80/READING.mp3",
    "mainTitleIconPos"      : {"right": "90px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> You do it!',
    "subTitleTextRight"     : "Answer the following questions about the advertisement.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p80doit.mp3",
    "defaultAnswer"         : -1,
    "image"                 :"",
    "questions": [{
            "textfront": "What is special about  &nbsp; <span class='red_text' style='font-family: cursive;'> Da Fingers! </span> &nbsp; Restaurant?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["The e-menu tablets at Da Fingers! Restaurant are special"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "In which paragraph does it talk about seeing photographs of the food being ordered?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["In the third paragraph. "],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
    ]
}