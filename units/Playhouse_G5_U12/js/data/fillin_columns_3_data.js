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
    "mainTitleAudio"        : "../audios/page_108/READING.mp3",
    "subTitleTextLeft"      : '<span class="title-order">2</span> Answer it!',
    "subTitleTextRight"     : "Answer the questions in complete sentences.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p108answer.mp3",
    "defaultAnswer"         : -1,
    "image"                 : "",
    "questions": [{
            "textfront": "Do farmers have to work long hours? What are some things that they have to do?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Yes farmers work for long hours. Every day my uncle, cousins and I would wake up very early to eat breakfast and start working. A farmer has to get up early to make sure that he  nishes his work before the sun sets"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "Why does Kelly want to be a farmer?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["because it is fun and rewarding. Kelly enjoyed feeding animals and growing vegetables"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
      
    ]
}