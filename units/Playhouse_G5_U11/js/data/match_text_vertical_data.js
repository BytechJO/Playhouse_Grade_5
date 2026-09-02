var stereo_data = {
  "audio":"",
  "exist":false,
  "bgColor_rgb":"rgb(87, 91, 160)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/p29/2.mp3',
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

var linedraw_data = {    
    "layout"                : 1,
    "mainTitle"             : "../images/pages/sb-icons/lang-build.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "60px"},
    "mainTitleAudio"        : "../audios/new/LANGUAGE_BUILDING.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>3</span> Match it!",
    "subTitleTextRight"     : "Read the telephone conversation between a student and the tennis coach. Draw a line to the correct responses.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p29/2_Match_it!_Match_each_Word_Power_word_to_its_definition.mp3",
    "image"                 : "",
    "connect"               : "single", // single (or) multiple
    "linecolor"             : "#217cf2ff",
    "path"                  : "line",
    "strokewidth"           : "4",
    "nodecolor"             : "#6e9beeff",
    "nodeselectioncolor"    : '#217cf2ff',
   "questions" : {
    "drags" : [
        {
            "text": "Tennis? That's a good choice.",
            "group": 1,   // ⬅️ جديد
            "image": "no", "audio": "../audios/p29/under.mp3", "audioenable": "default",
        },
        {
            "text": "Tennis? That's a well choice.",
            "group": 1,   // ⬅️ جديد - نفس مجموعة الخيار الأول
            "image": "no", "audio": "../audios/p29/under.mp3", "audioenable": "default",
        },
        {
            "text": "My friends say I'm a good player.",
            "group": 2,   // ⬅️ جديد
            "image": "no", "audio": "../audios/p29/under.mp3", "audioenable": "default",
        },
        {
            "text": "My friends say I'm a well player.",
            "group": 2,   // ⬅️ جديد
            "image": "no", "audio": "../audios/p29/under.mp3", "audioenable": "default",
        },
        {
            "text": "After school works good for me.",
            "group": 3,   // ⬅️ جديد
            "image": "no", "audio": "../audios/p29/under.mp3", "audioenable": "default",
        },
        {
            "text": "After school works well for me.",
            "group": 3,   // ⬅️ جديد
            "image": "no", "audio": "../audios/p29/under.mp3", "audioenable": "default",
        },
        {
            "text": "Thank you, Coach Tom. You'll see that picking me is a good idea.",
            "group": 4,   // ⬅️ جديد
            "image": "no", "audio": "../audios/p29/under.mp3", "audioenable": "default",
        },
        {
            "text": "Thank you, Coach Tom. You'll see that picking me is a well idea.",
            "group": 4,   // ⬅️ جديد
            "image": "no", "audio": "../audios/p29/under.mp3", "audioenable": "default",
        }
    ],
    "drops" : [
        {
            "text": "1 I want to join the tennis team",
            "group": 1,   // ⬅️ جديد - نفس مجموعة الخيارين 1 و2
            "image": "no", "answer": [1], "audio": "../audios/p29/under.mp3", "audioenable": "default",
        },
        {
            "text": "2 Do you know how to play tennis?",
            "group": 2,   // ⬅️ جديد
            "image": "no", "answer": [3], "audio": "../audios/p29/under.mp3", "audioenable": "default",
        },
        {
            "text": "3 Can you come to the gym after school?",
            "group": 3,   // ⬅️ جديد
            "image": "no", "answer": [6], "audio": "../audios/p29/under.mp3", "audioenable": "default",
        },
        {
            "text": "4 Okay! See you after school.",
            "group": 4,   // ⬅️ جديد
            "image": "no", "answer": [7], "audio": "../audios/p29/under.mp3", "audioenable": "default",
        }
    ]
}
}               