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
    "layout"               : 1,
    "numinrow"              : [[1], [1], [1], [1], [1]],
    "mainTitle"             : "../images/pages/sb-icons/gram_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/page_62/GRAMMAR.mp3",
    "mainTitleIconPos"      : {"right": "90px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> Write about it!',
    "subTitleTextRight"     : "Complete the sentences. Use the simple past or the past continuous.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p62write.mp3",
    "image"                 : "../images/pages/activities/1-img-1.png",
    "imageposition"         : "back",// "front" (or) "back"
    "numbering"       : "number", // "alphabet" (or) "number"
    "numberstartfrom" : 1,
    "options"         : [],
    "questions"       :
     [
        {
          "singleword": false,
          "text": "I [_]  (<span class='red_text'>learn</span>) how to ride a bike when my dad came to help.",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["was learning"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "We were playing football when they [_] (<span class='red_text'>break</span>) Mrs. Smith’s window.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["broke"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "Beth [_] (<span class='red_text'>talk</span>) on the phone when her mum [_] (<span class='red_text'>ask</span>) her to come to the kitchen.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["was talking","asked"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "Billy [_]  (<span class='red_text'>walk</span>) in the park when he [_] (<span class='red_text'>see</span>) some boys littering.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["was walking","saw"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
       
      ]
    }