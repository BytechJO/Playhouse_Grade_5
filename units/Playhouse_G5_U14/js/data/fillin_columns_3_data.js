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
    "mainTitle"             : "../images/pages/sb-icons/reading.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/adv_icon_1.png",
    "mainTitleIconPos"      : {"right": "70px"},
    "mainTitleAudio"        : "../audios/page_128/READING.mp3",
    "subTitleTextLeft"      : '<span class="title-order">2</span> You do it!',
    "subTitleTextRight"     : "Answer the questions in complete sentences.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p128doit.mp3",
    "defaultAnswer"         : -1,
    "image"                 : "",
    "questions": [
        {
            "textfront": "What is the name of the writer’s fort?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Fort Wannabee"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "What’s another name for a fort?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Some people say it's a clubhouse or a playhouse"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
          "textfront": "What does the writer say he likes to do in his fort?",
          "audio": "../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["they plan eat rest and play video games"],
          "strictcase": "no", // yes (or) no 
          "type": "text", // text (or) number
      }
    ]
}