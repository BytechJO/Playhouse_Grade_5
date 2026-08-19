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

    "subTitleTextLeft"      : '<span class="title-order">3</span> You do it!',
    "subTitleTextRight"     : "In Exercise 2, put an ‘X’ in the box of the picture that doesn’t match a sentence. For that picture, write a question and answer using ‘<span class='red_text'>one</span>’ or ‘<span class='red_text'>ones</span>’. Share it with the class.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p35doit.mp3",
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
          "text": "<span class='red_text'>Question:</span>[_]",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": [""],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "<span class='blue_text'>Answer:</span>[_]",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": [""],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
      ]
    }