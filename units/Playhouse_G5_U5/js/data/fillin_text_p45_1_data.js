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
    "mainTitle"             : "../images/pages/sb-icons/lang-build.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
    "mainTitleAudio"        : "../audios/page_45/LANGUAGE_BUILDING.mp3",
    "mainTitleIconPos"      : {"right": "58px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> Write it!',
    "subTitleTextRight"     : "Complete each sentence with a word from the word box above.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p45write.mp3",
    "image"                 : "",
    "imageposition"         : "back",// "front" (or) "back"
    "numbering"       : "number", // "alphabet" (or) "number"
    "numberstartfrom" : 1,
    "options"         : [],
    "optionsAudios"   : [],

    // ---- NEW: the grouped word box shown at the top of the page, matching
    // the reference image (4 language columns). "options" above is kept
    // (empty) for backward compatibility - buildFillInBody() prefers
    // wordGroups when present and falls back to "options" otherwise. ----
    "wordBoxTitle"    : "other languages:",
    "wordGroups"      : [
        { "label": "Latin",   "words": ["vacuum", "camera", "idea"] },
        { "label": "French",  "words": ["café", "routine", "cinema"] },
        { "label": "Indian",  "words": ["shampoo", "khaki", "jungle"] },
        { "label": "Arabic",  "words": ["algebra", "cotton", "lemon"] }
    ],

    "questions"       :
     [
        {
          "singleword": false,
          "text": "I went to the [_] to drink some coffee.",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["cafe"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "Sarah needs to do her[_]homework and practise her maths skills.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["algebra"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "Mum uses a[_]every day to clean the carpet.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["vacuum"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "Let’s go to the [_]and watch a film.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["cinema"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "Yoshi loves to take pictures with his [_]",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["camera"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
       
      ]
    }