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
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "90px"},
    "mainTitleAudio"        : "../audios/new/GRAMMAR_PRACTICE.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>1</span> Match it!",
    "subTitleTextRight"     : "Match each adverb of time to its correct ending. Then rewrite the sentences below.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p29/2_Match_it!_Match_each_Word_Power_word_to_its_definition.mp3",
    "image"                 : "",
    "connect"               : "multiple", // single (or) multiple
    "linecolor"             : "#217cf2ff",
    "path"                  : "line",
    "strokewidth"           : "4",
    "nodecolor"             : "#6e9beeff",
    "nodeselectioncolor"    : '#217cf2ff',
    "questions"             : {
        "drags"             : [
            {
                "text"          : "our world may look different.",
                "image"         : "no",
                "audio"         : "../audios/p29/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "we are in our classroom.",
                "image"         : "no",
                "audio"         : "../audios/p29/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "there were dinosaurs.",
                "image"         : "no",
                "audio"         : "../audios/p29/under.mp3",
                "audioenable"   : "default", // correct (or) default
            }
        ],
        "drops"                 : [
            {
                "text"          : "1 Right now,",
                "image"         : "no",
                "answer"        : [2],
                "audio"         : "../audios/p29/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "2 In the past,",
				"image"         : "no",
                "answer"        : [3],
                "audio"         : "../audios/p29/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            },
            {
            
                "text"          : "3 In the future,",
                "image"         : "no",
                "answer"        : [1],
                "audio"         : "../audios/p29/under.mp3",
                "audioenable"   : "default", // correct (or) default
            }
        ]
    },

    // ============================================================
    // Part 2 of the activity: "Then rewrite the sentences below."
    // One text input per numbered line. Answers are the FULL correct
    // sentence (drop text + matching drag text), independent of what
    // the student actually connected in the matching part above.
    // ============================================================
    "writeSentences": {
        "enable"    : true,
        "audio"     : "../audios/p29/under.mp3",
        "audioenable": "default", // correct (or) default
        "sentences" : [
            {
                "answer"          : ["Right now, we are in our classroom."],
                "alternateanswer" : [[]],
                "strictcase"      : "no", // yes (or) no
                "maxlength"       : 200
            },
            {
                "answer"          : ["In the past, there were dinosaurs."],
                "alternateanswer" : [[]],
                "strictcase"      : "no", // yes (or) no
                "maxlength"       : 200
            },
            {
                "answer"          : ["In the future, our world may look different."],
                "alternateanswer" : [[]],
                "strictcase"      : "no", // yes (or) no
                "maxlength"       : 200
            }
        ]
    }
}