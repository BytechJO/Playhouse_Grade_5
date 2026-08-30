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
  "mainTitleIconPos"      : {"right": "60px"},
  "mainTitleAudio"        : "../audios/new/GRAMMAR_PRACTICE.mp3",
  "subTitleTextLeft"      : "<span class='title-order'>1</span> You do it!",
  "subTitleTextRight"     : "Use the words given to write positive and negative sentences in the present continuous form.",
  "subTitleIcons"         : [""],
  "subTitleAudio"         : "../audios/new/p71doit.mp3",
  "image"                 : "",
  "imageposition"         : "back",// "front" (or) "back"
  "numbering"             : "alphabet", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  "options"               : [],
  "optionsAudios"         : [""],
  "images"                : ["../images/pages/activities/3-img-1.png","../images/pages/activities/3-img-2.png"],
  "numOfGroups"           : 2,
  "titles"                : ["WRITE POSITIVE SENTENCES","WRITE NEGATIVE SENTENCES"],
  "questions"             : 
   [
      {
        "singleword": false,
        "groupNo":"1",
        "text": "I / bake / a cake / for / Andy / today [_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["I'm baking a cake for Andy today"],
        "alternateanswer": [["I am baking a cake for Andy today"]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"1",
        "text": "They / pick up / their / friends / from / the airport / today. [_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["They're picking up their friends from the airport today"],
        "alternateanswer": [["They are picking up their friends from the airport today"]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 100,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"1",
        "text": "We / watch / films / after / dinner.[_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["We are watching films after dinner"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 100,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"1",
        "text": "Julia / come / over / on / Tuesday. [_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["Julia is coming over on Tuesday"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 100,
        "type": "text", // text (or) number
      },
      // 
      {
        "singleword": false,
        "groupNo":"2",
        "text": "I / go / to / the / barber’s shop / after lunch[_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["I'm not going to the barber's shop after lunch"],
        "alternateanswer": [["I am not going to the barber's shop after lunch"]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 100,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"2",
        "text": "My / wife / cooking / breakfast / for / me/ tomorrow.[_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["My wife isn't cooking breakfast for me tomorrow"],
        "alternateanswer": [["My wife is not cooking breakfast for me tomorrow"]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"2",
        "text": "My / son / get / married / next /year.[_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["My son is not getting married next year"],
        "alternateanswer": [["My son isn't getting married next year"]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"2",
        "text": "We / have / soup / for / lunch. [_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["We aren't having soup for lunch"],
        "alternateanswer": [["We are not having soup for lunch"]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
    ]
  }