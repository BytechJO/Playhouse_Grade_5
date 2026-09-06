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
    "layout"                : 1,
    "numinrow"              : [[1,1]],
    "mainTitle"             : "../images/pages/sb-icons/conv_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/conv_main_title_icon.png",
    "mainTitleAudio"        : "../audios/page_133/CONVERSATION.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> Answer it!',
    "subTitleTextRight"     : "Answer the following questions.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p133answer.mp3",
    "defaultAnswer"         : -1,
    "image"                 :"",
    "questions": [
      {
        "textfront": "Describe Yoshi’s dad. What does he do?",
        "audio": "../audios/under.mp3",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["He's an artist. He paints pictures. He loves painting murals"],            
        "strictcase": "no", // yes (or) no              
        "type": "text", // text (or) number
      }, 
      {
        "textfront": "What are Lilly and Yoshi looking at? Does Lilly like it? How do you know?",
        "audio": "../audios/under.mp3",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["They are looking at a mural Yes she likes it she said it looks like a masterpiece"],            
        "strictcase": "no", // yes (or) no              
        "type": "text", // text (or) number
      },
    ]
}