var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p70/3.mp3',
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
    "mainTitle"             : "../images/pages/sb-icons/CONVERSATION.jpg",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/p70/CONVERSATION.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">3</span> Answer it!',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p70/3_Answer_it!.mp3",
    "image"                 : "",
    "imageposition"         : "back",// "front" (or) "back"
    "defaultAnswer"         : 1,
    "numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "questions"             :
     [
        {
          "singleword": false,
          "text": "Who is going to move to a new house? [_]",
          "textaudios": ["../audios/p70/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Hannah is going to move to a new house"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "Is the new house going to be bigger or smaller than the house she has now? [_]",
          "textaudios": ["../audios/p70/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["The new house is going to be bigger than the house she has now"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        
      ]
    }