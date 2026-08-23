var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p30/2.mp3',
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
    "mainTitleAudio"        : "../audios/p30/CONVERSATION.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">2</span> Answer it! Answer the questions.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p30/2_Answer_it!_Answer_the_questions.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 :"",
    "questions": [{
            "textfront": "What did Kate’s father buy?",
            "audio": "../audios/p30/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Kate's father bought a mobile phone"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "Why does Kate’s dad need a mobile phone with internet?",
            "audio": "../audios/p30/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["He travels a lot, and he needs to have the internet with him all the time"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "How did Kate’s dad play marbles a long time ago?",
            "audio": "../audios/p30/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["He played marbles the old-fashioned way, on the ground with real marbles"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "How does Daisy buy her school supplies these days?",
            "audio": "../audios/p30/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Daisy buys her school supplies online"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
       
    ]
}