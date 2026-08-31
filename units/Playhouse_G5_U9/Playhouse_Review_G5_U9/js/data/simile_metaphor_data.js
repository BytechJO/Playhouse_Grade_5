var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        { 'audiourl': '../audios/page_xx/track.mp3' },
        { 'url': '' }, { 'url': '' }, { 'url': '' }
    ],
}

// ملاحظة: بدّل الإجابات (answer) تحت حسب المفتاح الفعلي تبع الدرس
var simile_metaphor_data = {
    "mainTitle"         : "",
    "mainTitleIcon"     : "",
    "mainTitleIconPos"  : {"right": "-18px"},
    "mainTitleAudio"    : "../audios/page_xx/similes.mp3",
    "subTitleTextLeft"  : "SIMILES AND METAPHORS",
    "subTitleTextRight" : "",
    "subTitleIcons"     : [],
    "subTitleAudio"     : "../audios/page_xx/similes.mp3",
    "instructionText"   : "Use the pictures as clues to fill in the blanks to complete each simile or metaphor.",

    // الصور الكبيرة فوق يسار (lion, feather)
    "topImages" : [
        { "src": "../images/pages/activities/4.jpg",     "alt": "lion" },
        { "src": "../images/pages/activities/5.jpg",  "alt": "feather" }
    ],

    // الصورتين عاليمين، فوق بعض (fire, dinosaurs)
    "sideImages" : [
        { "src": "../images/pages/activities/0.jpg",       "alt": "fire" },
        { "src": "../images/pages/activities/1.jpg",  "alt": "dinosaurs" }
    ],

    // صورتين تحت يسار (diamond, water drop)
    "bottomImages" : [
        { "src": "../images/pages/activities/2.jpg",     "alt": "diamond" },
        { "src": "../images/pages/activities/3.jpg",  "alt": "water drop" }
    ],

    "questions" : [
        {
            "text"            : "1&nbsp; The baby is as light as a [_].",
            "answer"          : ["feather"],
            "alternateanswer" : [[]],
            "strictcase"      : "no",
            "maxlength"       : 30,
            "type"            : "text"
        },
        {
            "text"            : "2&nbsp; Her eyes were on [_] from anger.",
            "answer"          : ["fire"],
            "alternateanswer" : [[]],
            "strictcase"      : "no",
            "maxlength"       : 30,
            "type"            : "text"
        },
        {
            "text"            : "3&nbsp; I am as hungry as a [_].",
            "answer"          : ["lion"],
            "alternateanswer" : [[]],
            "strictcase"      : "no",
            "maxlength"       : 30,
            "type"            : "text"
        },
        {
            "text"            : "4&nbsp; The glass was as clear as a [_].",
            "answer"          : ["diamond"],
            "alternateanswer" : [[]],
            "strictcase"      : "no",
            "maxlength"       : 30,
            "type"            : "text"
        },
        {
            "text"            : "5&nbsp; This picture is a true [_].",
            "answer"          : ["dinosaur"],
            "alternateanswer" : [["dinosaurs"]],
            "strictcase"      : "no",
            "maxlength"       : 30,
            "type"            : "text"
        },
        {
            "text"            : "6&nbsp; Your computer is a [_]. It's so old!",
            "answer"          : ["dinosaur"],
            "alternateanswer" : [["dinosaurs"]],
            "strictcase"      : "no",
            "maxlength"       : 30,
            "type"            : "text"
        }
    ]
}