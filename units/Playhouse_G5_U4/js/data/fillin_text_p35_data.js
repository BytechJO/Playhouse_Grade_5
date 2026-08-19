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
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "50px"},
    "mainTitleAudio"        : "../audios/new/GRAMMAR_PRACTICE.mp3",
    "subTitleTextLeft"      : '<span class="title-order">1</span> Choose it!',
    "subTitleTextRight"     : "Fill in the blanks below using ‘<span class='red_text'>one</span>’ or ‘<span class='red_text'>ones</span>’.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p35choose.mp3",
    "image"                 : "",
    "imageposition"         : "back",// "front" (or) "back"
    "numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "parentClassName"       : "",
    "questions"             :
     [
        {
          "singleword": false,
          "text": "These are my brothers. The young[_]is five, and the older[_]is 10.",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["one","one"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "I need some new glasses. The[_]I have now are broken.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["ones"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "I didn’t buy the blue shoes. I bought the black[_].",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["ones"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
      ]
    }