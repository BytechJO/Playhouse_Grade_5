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
    "mainTitle"             : "../images/pages/sb-icons/reading.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/adv_icon_1.png",
    "mainTitleIconPos"      : {"right": "70px"},
    "mainTitleAudio"        : "../audios/page_120/READING.mp3",
    "subTitleTextLeft"      : '<span class="title-order">2</span> You do it!',
    "subTitleTextRight"     : "Answer the questions in complete sentences.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p120doit.mp3",
    "defaultAnswer"         : -1,
    "image"                 : "",
    "questions": [{
            "textfront": "What were the original colours in a Crayola crayon box?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["the colours were black brown blue red purple orange yellow and green"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "What made the cousins start thinking about making coloured crayons?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Mrs. Binney was interested in art and wished for a drawing tool with colour"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
      
    ]
}