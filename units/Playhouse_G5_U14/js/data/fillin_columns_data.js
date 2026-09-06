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
    "mainTitle"             : "../images/pages/sb-icons/conv_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/conv_main_title_icon.png",
    "mainTitleAudio"        : "../audios/page_125/CONVERSATION.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> Answer it!',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p125answer.mp3",
    "defaultAnswer"         : -1,
    "image"                 :"",
    "questions": [
      {
        "textfront": "What is Mr. Finn’s job?",
        "audio": "../audios/under.mp3",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["He is a construction worker"],            
        "strictcase": "no", // yes (or) no              
        "type": "text", // text (or) number
      }, 
      {
        "textfront": "Do you think the Playhouse Kids enjoyed meeting Mr. Finn? Why?",
        "audio": "../audios/under.mp3",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": [""],            
        "strictcase": "no", // yes (or) no              
        "type": "text", // text (or) number
      },
    ]
}