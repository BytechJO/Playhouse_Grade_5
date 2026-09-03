var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p60/2.mp3',
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
    "numinrow"              : [[1,1]],
    "mainTitle"             : "../images/pages/sb-icons/CONVERSATION.jpg",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/p60/CONVERSATION.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">2</span> Answer it! Answer the questions.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p60/2_Answer_it!_Answer_the_questions.mp3",
    "defaultAnswer"         : 1,
    "leftList"              : '',
    "image"                 :"",
    "questions": [{
            "textfront": "What does Fred want to do when he grows up?",
            "audio": "../audios/p60/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Fred would like to become a firefighter, a pilot or an astronaut"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "Does Joe know what he wants to do when he grows up? Why or why not?",
            "audio": "../audios/p60/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Joe does not know what he wants to do when he grows up because he would like to do so many different things"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
       
    ]
}