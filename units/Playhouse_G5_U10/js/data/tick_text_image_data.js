var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(87, 91, 160)",
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
var mcq_tick_data = {    
    "layout"                : 1,
    "numinrow"              : [[1]],
    "mainTitle"             : "../images/pages/sb-icons/gram_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "80px"},
    "mainTitleAudio"        : "../audios/page_90/GRAMMAR.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>1</span> Find it!",
    "subTitleTextRight"     : "Read the sentences below and find the indirect questions. Put a tick ✓ next to the indirect questions.",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/new/p90find.mp3", 
    "select"                : "multiple", // single (or) multiple
    "shape"                 : "tickbox", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) tickbox
    "bgcolor"               : "none",
    "showicon"              : "true",
    "images"                 : ["../images/pages/activities/2-img-1.png","../images/pages/activities/2-img-2.png"],
    "numbering"             : "none",
    "numberstartfrom"       : 1,
    "questions"             : [
        {
            "question"              : "",
            "answer"                : [1,3,4],
            "image"                 : "",
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "numbering"				      : "none", // alphabet (or) number (or) none
            "numberstartfrom"		    : "a",
            "options"               : [
                {
                  "text"          : "<b>1</b> &nbsp; Would you mind telling me where the salad bar is?",
                  "image"         : "no",
                  "audio"         : "no",
                  "audioenable"   : "default", // correct (or) default
                },
                {
                  "text"          : "<b>2</b> &nbsp; What does she want to eat?",
                  "image"         : "no",
                  "audio"         : "no",
                  "audioenable"   : "default", // correct (or) default
                },   
                {
                  "text"          : "<b>3</b> &nbsp; Do you know if she wants cheese on her salad?",
                  "image"         : "no",
                  "audio"         : "no",
                  "audioenable"   : "default", // correct (or) default
                },               
                {
                  "text"          : "<b>4</b> &nbsp; Could you please ask the waiter to come over?",
                  "image"         : "no",
                  "audio"         : "no",
                  "audioenable"   : "default", // correct (or) default
                },   
                {
                  "text"          : "<b>5</b> &nbsp; Please pass me a napkin",
                  "image"         : "no",
                  "audio"         : "no",
                  "audioenable"   : "default", // correct (or) default
                },
            ]
        },
       
    ]
}