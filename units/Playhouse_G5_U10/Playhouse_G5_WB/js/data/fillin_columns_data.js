var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p51/1.mp3',
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
    "layout"                : 1,
    "numinrow"              : [[1,1,1,1]],
    "mainTitle"             : "../images/pages/sb-icons/grammer_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/p51/GRAMMAR.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">1</span> Write it! Write an indirect question for each problem.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p51/1_Write_it!_Write_an_indirect_question_for_each_problem.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 :"",
    "questions": [{
            "textfront": "You are in a restaurant and the food served is cold.",
            "audio": "../audios/p51/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Could you please heat up food?"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "You don’t know where the bathroom is.",
            "audio": "../audios/p51/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Would you mind telling me where the bathroom is?"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "You are lost and you want to reach Main Street.",
            "audio": "../audios/p51/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Do you happen to know how to reach Main Street?"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "You are in a restaurant and the waiter has not served you.",
            "audio": "../audios/p51/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["I'd like to know when we could be served"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
    ]
}