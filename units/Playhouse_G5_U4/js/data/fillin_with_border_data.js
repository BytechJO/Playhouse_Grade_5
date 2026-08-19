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
  "mainTitleIcon"         : "../images/pages/sb-icons/phonics_3_icon.png",
  "mainTitleIconPos"      : {"right": "60px"},
"mainTitleAudio"        : "../audios/new/LANGUAGE_BUILDING.mp3",  "subTitleTextLeft"      : "<span class='title-order'>2</span> Categorise it!",
  "subTitleTextRight"     : "Read the sentences, and then write them in the correct column.",
  "subTitleIcons"         : [""],
  "subTitleAudio"         : "../audios/new/p37catigorise.mp3",
  "image"                 : "",
  "imageposition"         : "back",// "front" (or) "back"
  "numbering"       : "alphabet", // "alphabet" (or) "number"
  "numberstartfrom" : "a",
  "options"         : ["What kind of meat do you want to eat?","That’s the type of food I like.","What types of jeans do you want to buy?","These sorts of problems are hard to figure out."],
  "optionsAudios"   :[""],
  "images"          :[],
  "numOfGroups"     :2,
  "titles"          :["Singular","Plural"],
  "questions"       :
   [
      {
        "singleword": false,
        "groupNo":"1",
        "text": "[_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["What kind of meat do you want to eat?"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "no", // FIX: order within the group shouldn't matter
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"1",
        "text": "[_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        // FIX: was "That's the type of food I like" (straight apostrophe,
        // no period) - didn't match the option text shown to the student,
        // which uses a curly apostrophe and ends with a period.
        "answer": ["That’s the type of food I like."],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "no",
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"2",
        "text": "[_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["What types of jeans do you want to buy?"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "no",
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"2",
        "text": "[_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        // FIX: was missing the trailing period that's in the option text.
        "answer": ["These sorts of problems are hard to figure out."],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "no",
        "maxlength": 50,
        "type": "text", // text (or) number
      },
    ]
  }