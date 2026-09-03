var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p66/2.mp3',
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
    "mainTitle"             : "../images/pages/sb-icons/grammer_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/p66/GRAMMAR.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">2</span> Change it! Rewrite the sentences below in the past passive form.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p66/2_Change_it!_Rewrite_the_sentences_below_in_the_past_passive_form.mp3",
    "defaultAnswer"         : 0,
    "leftList"              : '',
    "image"                 :"",
    "questions": [{
            "textfront": "Sarah opened the door.",
            "audio": "../audios/p66/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["The door was opened by Sarah"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "My dad baked the cake.",
            "audio": "../audios/p66/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["The cake was baked by my dad"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
       
    ]
}