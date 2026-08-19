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
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_3_icon.png",
    "mainTitleAudio"        : "../audios/page_36/READING.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> Answer it!',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p36answer.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 : "",
    "questions": [{
            "textfront": "Which style above is your favourite?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": [""],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "Do you have a different style from the ones above? Describe it.",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": [""],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "Do you think that your clothing style showsyour personality?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": [""],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
    ]
}