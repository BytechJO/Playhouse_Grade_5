var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(0, 183, 206)",
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
    "mainTitle"             : "",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "100px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : "<span class='green_text'>3</span> Circle it! <span style='color:navy'> Circle <b style='color:red'>‘T’</b> if the sentence is true and <b style='color:red'>‘F’</b> if the sentence is false. For false sentences, rewrite the sentence with a correct adverb of time from the box. </span>",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/new/fix.mp3",
    "activityheading"       : "",
    "activityheading_audio" : "../audios/under.mp3",
    "activitysubheading"    : "",
    "activityicon"          : "../images/icons/hand_icon.png",
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "showicon"              : "true",
	"image"                 : "",
	"numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       :  1,
    "options"               : ["right now", "nowadays", "in the future", "previously"],
    "questions"             :
    [
        {
            "question": "Nowadays, people used to travel by riding horses.",
            "answer": [2],            
            "audio": "",
            "audioenable": "default", // correct (or) default
            "fillinanswer":"Previously people used to travel by riding horses",
            "options": [
                {
                    "text": "T",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
                {
                    "text": "F",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                }
            ]
        },
        {
            "question": "In the future, we might have flying cars.",
            "answer": [1],            
            "audio": "",
            "audioenable": "default", // correct (or) default
            "fillinanswer":"",
            "options": [
                {
                    "text": "T",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
                {
                    "text": "F",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                }
            ]
        },
        {
            "question": "Previously, going anywhere is very easy.",
            "answer": [2],            
            "audio": "",
            "audioenable": "default", // correct (or) default
            "fillinanswer":"Nowadays going anywhere is very easy",
            "options": [
                {
                    "text": "T",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
                {
                    "text": "F",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                }
            ]
        },
        {
            "question": "Later, we are in the classroom.",
            "answer": [2],            
            "audio": "",
            "audioenable": "default", // correct (or) default
            "fillinanswer":"Right now we are in the classroom",
            "options": [
                {
                    "text": "T",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
                {
                    "text": "F",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                }
            ]
        }
    ]
}