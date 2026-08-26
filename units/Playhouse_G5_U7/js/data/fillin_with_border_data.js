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
  "mainTitleIconPos"      : {"right": "110px"},
  "mainTitleAudio"        : "../audios/new/GRAMMAR_PRACTICE.mp3",
  "subTitleTextLeft"      : "<span class='title-order'>1</span> You do it!",
  "subTitleTextRight"     : "Complete the sentences.",
  "subTitleIcons"         : [""],
  "subTitleAudio"         : "../audios/new/p63doit.mp3",
  "image"                 : "",
  "imageposition"         : "back",// "front" (or) "back"
  "numbering"             : "alphabet", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  "options"               : [],
  "optionsAudios"         : [],
  "images"                : [],
  "numOfGroups"           : 3,
  "titles"                : ["[do / invite / ring / browse]","[stop / do / arrive / visit]","[ring / do / tell / watch]"],
  "groups_img"            : ["../images/pages/activities/2-img-1.png","../images/pages/activities/2-img-2.png","../images/pages/activities/2-img-3.png"],
  "questions"             :
   [
      {
        "singleword": false,
        "groupNo":"1",
        "text": "<span class='red_text'>a</span> &nbsp; What[_]Peter[_]when you[_]him?",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["was","doing","rang"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"1",
        "text": "<span class='blue_text'>b</span> &nbsp; He said he[_][_]the web because he was bored, so I [_] him for a walk.",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["was","browsing","invited"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"2",
        "text": "<span class='red_text'>a</span> &nbsp; What[_]Jill[_]when you[_]her?",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["was","doing","visited"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"2",
        "text": "<span class='blue_text'>b</span> &nbsp; She[_][_]her homework, but she[_]when we[_].",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["was","doing","stopped","arrived"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"3",
        "text": "<span class='red_text'>a</span> &nbsp; What[_]Steve, Marci and Greg[_]when the bell[_]?",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["were","doing","rang"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"3",
        "text": "<span class='blue_text'>b</span> &nbsp; They[_][_]cartoons. Their mum[_]them to answer the door.",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["were","watching","told"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
    ]
  }