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
    "mainTitleAudio"        : "../audios/page_92/READING.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> Answer it!',
    "subTitleTextRight"     : "Answer the following questions based on the comment form above.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p92answer.mp3",
    "defaultAnswer"         : -1,
    "image"                 :"",
    "questions": [{
            "textfront": "How was the soup? What clues in the form make you think so?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["The soup didn't have any spices. I think that you might have forgotten to add spices to the soup."],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "How was the chicken? How can you tell this from the comment form?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["The chicken was burnt. Maybe you left the chicken in the oven too long, because it tasted burnt."],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "Was the food cold? How do you know?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Yes, the food was cold. Also, it would be better if you could serve the food as soon as it is cooked."],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
    
    ]
}