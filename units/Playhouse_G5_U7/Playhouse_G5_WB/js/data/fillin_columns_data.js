var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p35/2.mp3',
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
    "mainTitle"             : "../images/pages/sb-icons/CONVERSATION.jpg",
    "mainTitleIcon"         : "../images/pages/sb-icons/word_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/p35/CONVERSATION.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">2</span> Answer it! Answer the questions.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p35/2_Answer_it!_Answer_the_questions.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 :"",
    "questions": [{
            "textfront": "What were Amanda and Donny doing when Ms. Long spoke to them?",
            "audio": "../audios/p35/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Amanda and Donny were throwing away rubbish from lunch"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "What did Ms. Long ask them to do?",
            "audio": "../audios/p35/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Ms. Long asked them to join the Green Club"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "What time does the Green Club meet?",
            "audio": "../audios/p35/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["They don't know what time the Green Club meets"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "What is Donny and Amanda’s father going to do tomorrow?",
            "audio": "../audios/p35/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Donny and Amanda’s father is going to call Ms. Long tomorrow"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
    ]
}