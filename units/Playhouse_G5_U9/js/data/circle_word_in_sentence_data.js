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
var mcq_data = {    
    "layout"                : 1,
    "numinrow"              : [[1]],
    "mainTitle"             : "../images/pages/sb-icons/lang-build.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "60px"},
    "mainTitleAudio"        : "../audios/page_81/LANGUAGE_BUILDING.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>3</span> Choose it!",
    "subTitleTextRight"     : "Choose the best word to complete each sentence.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p81choose.mp3",
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "number",
    "numberstartfrom"       : 1, 
    "numberofcolumns"       :  1,
    "image"                 : "../images/pages/activities/2-img-1.png",
    "imageposition"         :"back",
    "questions"             : [
        {
            "question"              : "The cupcakes were made ([_]) a chef!",
            "options"               : [["by ","buy"]],          
            "answer"                : [1],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : "Where is Kate going? She is going ([_]) the skating rink with Kim.",
            "options"               : [["too","to"]],
            "answer"                : [2],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        },
        {
            "question"              : "I couldn’t finish my dinner. I took two ([_]) and then stopped.",
            "options"               : [["bytes","bites"]],          
            "answer"                : [2],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : "I am a student. Kase is a student, and you are a student ([_]).",
            "options"               : [["too","to"]],
            "answer"                : [1],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        }, 
        
    ]
}