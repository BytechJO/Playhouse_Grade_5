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
    "mainTitleAudio"        : "../audios/page_77/CONVERSATION.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>2</span> You do it!",
    "subTitleTextRight"     : "1 What do you think the Playhouse Kids ordered for dessert? <textarea class='text_input_noabs' maxlength='1'></textarea> <br/> 2 Label the pictures below (appetiser / main / course / dessert). <br/> 3 Number the pictures in the order that you eat them.",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/under.mp3",
    "image"                 : "../images/pages/activities/ASP_3_SB_U14_P84_I1.png",
    "imageposition"         : "back",// "front" (or) "back"
    "numbering"             : "alphabet", // "alphabet" (or) "number"
    "numberstartfrom"       : "a",
    "options"               : [],
    "images"                : [],
    "questions": [
      {
        "singleword": false,
        "text": "[_]",
        "textaudios": ["../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/img1.png",
        "answer": ["dessert"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 15,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "[_]",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/img2.png",
        "answer": ["appetiser"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 15,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "[_]",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/img3.png",
        "answer": ["main course"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 15,
        "type": "text", // text (or) number
      }
    ]
  }