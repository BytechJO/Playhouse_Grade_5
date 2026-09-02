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
    "layout": 1,
    "numinrow": [[1], [1], [1], [1], [1]],
    "mainTitle"             : "../images/pages/sb-icons/conv_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/conv_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "90px"},
    "mainTitleAudio"        : "../audios/page_97/CONVERSATION.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>3</span> You do it!",
    "subTitleTextRight"     : "Use your own answers to complete the conversations.",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/under.mp3",
    "image"                 : "../images/pages/activities/ASP_3_SB_U14_P84_I1.png",
    "imageposition"         : "back",// "front" (or) "back"
    "numbering"             : "alphabet", // "alphabet" (or) "number"
    "numberstartfrom"       : "a",
    "options"               : [],
    "images"                : 
      [],
    "questions": [
      {
        "singleword": false,
        "text": "Hello. Is . . . there? [_]",
        "textaudios": ["../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": [""],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 10,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "[_] Who’s calling, please?",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": [""],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 10,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "He/She’s not here right now. [_]",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": [""],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 10,
        "type": "text", // text (or) number
      }
    ]
  }