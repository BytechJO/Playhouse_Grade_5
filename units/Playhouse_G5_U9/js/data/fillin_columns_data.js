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
    "mainTitle"             : "../images/pages/sb-icons/gram_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/page_78/GRAMMAR.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> Write it!',
    "subTitleTextRight"     : "Make polite requests using the sentences below.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p78write.mp3",
    "defaultAnswer"         : -1,
    "image"                 :"",
    "questions": [{
            "textfront": "You want to see the menu.",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Could I see the menu?"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "You want to invite someone to dine* with you on Saturday.",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Would you like to dine with me on Saturday?"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "hintText":"*dine: to eat a meal",
            "textfront": "Your mum made a chocolate cake and you want more.",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Could I have more chocolate cake?"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
    ]
}