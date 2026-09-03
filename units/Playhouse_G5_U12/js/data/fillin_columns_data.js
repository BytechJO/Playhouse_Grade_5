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
    "mainTitle"             : "../images/pages/sb-icons/conv_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/conv_main_title_icon.png",
    "mainTitleAudio"        : "../audios/page_105/CONVERSATION.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> Answer it!',
    "subTitleTextRight"     : "Answer the following questions based on the conversation above.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p105answer.mp3",
    "defaultAnswer"         : -1,
    "image"                 :"",
    "questions": [
      {
        "textfront": "What does Max want to be when he grows up?",
        "audio": "../audios/under.mp3",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["Max wants to be a veterinarian when he grows up"],            
        "strictcase": "no", // yes (or) no              
        "type": "text", // text (or) number
      }, 
      {
        "textfront": "Why does Jenny want to be a nurse?",
        "audio": "../audios/under.mp3",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["Because she likes helping people feel better"],            
        "strictcase": "no", // yes (or) no              
        "type": "text", // text (or) number
      },
      {
        "textfront": "What kind of job could Yoshi do when he grows up?",
        "audio": "../audios/under.mp3",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["He could be a photographer"],            
        "strictcase": "no", // yes (or) no              
        "type": "text", // text (or) number
      },
    ]
}