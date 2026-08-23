var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(87, 91, 160)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/page_49/2.mp3',
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
    "mainTitle"             : "../images/pages/sb-icons/conv_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/conv_main_title_icon.png",
    "mainTitleAudio"        : "../audios/page_49/CONVERSATION.mp3",
    "mainTitleIconPos"      : {"right": "90px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> Listen and answer',
    "subTitleTextRight"     : "Listen to the conversation again and then answer the questions.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/page_49/2_Listen_and_answer!.mp3",
    "defaultAnswer"         : -1,
    "image"                 :"",
    "questions": [{
            "textfront": "Where did Lilly’s parents go?",
            "audio": "../audios/page_49/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Actor 1 doesn't want to do another take of a scene"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "How did people shop in the past?",
            "audio": "../audios/page_49/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Actor 1 asks the director for a short break"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
      
    ]
}