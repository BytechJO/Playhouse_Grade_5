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
    "mainTitleIconPos"      : {"right": "70px"},
    "mainTitleAudio"        : "../audios/page_136/READING.mp3",
    "subTitleTextLeft"      : '<span class="title-order">2</span> You do it!',
    "subTitleTextRight"     : "Answer the questions.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p136doit.mp3",
    "defaultAnswer"         : -1,
    "image"                 : "",
    "questions": [
        {
            "textfront": "What is Max Warick most famous for?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["He is most famous for his large, outdoor murals of whales and other wildlife"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "What did Max paint in Beijing?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["He painted a mural for city kids in Chaoyang Park in Beijing"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
      
    ]
}