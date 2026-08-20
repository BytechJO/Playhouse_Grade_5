var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "playListData" : [
        {
          'audiourl': '../audios/p27/1.mp3',
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
    "layout"               : 1,
    "numinrow"              : [[1], [1], [1], [1], [1]],
    "mainTitle"             : "../images/pages/sb-icons/LANGUAGE_BUILDING.jpg",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio": "../audios/p27/LANGUAGE_BUILDING.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">1</span> You do it! Fill in the blanks using the words above.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/p27/1_You_do_it!_Fill_in_the_blanks_using_the_words_above.mp3",
    "image"                 : "",
    "imageposition"         : "back",// "front" (or) "back"
    "defaultAnswer"         : 1,
    "numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,

    // ============================================================
    // word bank shown ABOVE the questions (4 categories, like the book layout)
    // buildFillInBody.js reads this and renders it as columns above "ques"
    // ============================================================
    "wordBank": [
        {
            "title": "Latin",
            "titleAudio": "../audios/p27/latin.mp3",
            "words": ["vacuum", "calculator", "idea"],
            "wordsAudios": ["../audios/p27/vacuum.mp3", "../audios/p27/calculator.mp3", "../audios/p27/idea.mp3"]
        },
        {
            "title": "French",
            "titleAudio": "../audios/p27/french.mp3",
            "words": ["café", "routine", "cinema"],
            "wordsAudios": ["../audios/p27/cafe.mp3", "../audios/p27/routine.mp3", "../audios/p27/cinema.mp3"]
        },
        {
            "title": "Indian",
            "titleAudio": "../audios/p27/indian.mp3",
            "words": ["shampoo", "khaki", "jungle"],
            "wordsAudios": ["../audios/p27/shampoo.mp3", "../audios/p27/khaki.mp3", "../audios/p27/jungle.mp3"]
        },
        {
            "title": "Arabic",
            "titleAudio": "../audios/p27/arabic.mp3",
            "words": ["algebra", "cotton", "lemon"],
            "wordsAudios": ["../audios/p27/algebra.mp3", "../audios/p27/cotton.mp3", "../audios/p27/lemon.mp3"]
        }
    ],

    "options"               : [],
    "questions"             :
     [
        {
          "singleword": false,
          "text": "I wash my hair with[_]",
          "textaudios": ["../audios/p27/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["shampoo"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "I need a[_]to do my maths homework.",
          "textaudios": ["../audios/p27/under.mp3","../audios/p27/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["calculator"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "I am drinking coffee in a[_]",
          "textaudios": ["../audios/p27/under.mp3","../audios/p27/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["café"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "This shirt is made of[_]",
          "textaudios": ["../audios/p27/under.mp3","../audios/p27/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["cotton"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },       
        {
          "singleword": false,
          "text": "Thanks for suggesting going to the park today. It was a great[_]",
          "textaudios": ["../audios/p27/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["idea"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "My sister and I went to the[_]to watch the latest film.",
          "textaudios": ["../audios/p27/under.mp3","../audios/p27/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["cinema"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
               
      ]
    }