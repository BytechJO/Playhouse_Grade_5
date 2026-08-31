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
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "70px"},
    "mainTitleAudio"        : "../audios/new/GRAMMAR_PRACTICE.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>1</span> Complete it!",
    "subTitleTextRight"     : "Complete each question by writing ‘would’ or ‘could’ to make it a polite request.",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/new/p79complete.mp3",
    "image"                 : "../images/pages/activities/ASP_3_SB_U14_P84_I1.png",
    "imageposition"         : "back",// "front" (or) "back"
    "numbering"             : "alphabet", // "alphabet" (or) "number"
    "numberstartfrom"       : "a",
    "options"               : [],
    "images"                : 
      [
        {"img": "../images/pages/activities/1-img-1.png",
          "top": "190px",
          "left": "929px",
        },
        {"img": "../images/pages/activities/1-img-2.png",
          "top": "387px",
          "left": "150px",
        },
      ],
    "questions": [
      {
        "singleword": false,
        "text": "1 [_]  I have a burger and chips, please?",
        "textaudios": ["../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["Could"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 10,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "2 [_] you mind if I take a look at the menu first?",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["Would"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 10,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "3 [_] you like our special soup?",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["Would"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 10,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "4 [_] you please show me where the bathroom is?",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["Could"],
        "alternateanswer": [["Would"]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 10,
        "type": "text", // text (or) number
      }
    ]
  }