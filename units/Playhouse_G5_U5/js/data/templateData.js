var _data = {
    "title":{
        "grade": "Playhouse 2nd Edition",
        "unit" : "Grade 1"
    },
    "header": {
        "unitno"       :"1",
       "bgcolor": "linear-gradient(180deg, #575ba0 0%, rgba(255,255,255,0) 100%)",
       "icon": "./images/unit-icon.png",   

       "grammer_icon":"./images/icons/gram-icon.png",
       "grammer_link":"./views/slide_4.html", 

       "vocabulary_icon":"./images/icons/voc-icon.png", 
       "vocabulary_link":"./views/slide_11.html",

       "poster_icon":"./images/icons/poster-icon.png", 
       "poster_link":"./views/playhouse_intro.html", 

       "homebutton" : {
        'visible'   : 'yes', // yes (or) no
        'link'      : 'index.html'
       }, 
    
       "audio": "./audios/page_40/UNIT_05_Whose_Job_Is_It.mp3",
       "title":{
           "text": "Whose Job Is It?",
           "color":"rgb(255, 255, 255);",
           "text-align": "center",
           "font-size": "44px",
           "text-shadow": "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",            
           "max-width": "894px",
           "width": "60vw",
       },
       "readingPageOne":{
           "audio":"./audios/ARC_2_1_SB_U1_TitleAudio.mp3"           
       }
    },
    "body":{
        "background-color": "#fff"
    },
    "footer": {
        "unitno"       :"1", 
        "bgcolor": "linear-gradient(0deg, #575ba0 0%, rgba(255,255,255,0) 100%)",      
        "buttons"    : [],
        "filetoload" : [],
        "reviewbutton" : {
            'visible'   : 'yes', // yes (or) no
            'link'      : 'Playhouse_Review_G5_U5/views/fillin_text_in_sentences_2_2.html'
        },
        "booksbutton" : { 
            "workbook": {
                'icon'   : '../images/icons/book-2.png',
                'link'      : '../Playhouse_G5_WB/views/fill_number_or_letter.html'
            },
            "studentbook": {
                'icon'   : '../images/icons/book-1.png',
                'link'      : './playhouse_intro.html'
            }
        }
    },
    "subfooter" : {
        "activitybuttons"   : [ "CCSS", "Link", "Homework", "Tips" ],        
        "navigationbuttons" : [ "back", "next" ],    
        "functionbuttons"   : [ "check", "reset" ]    
    }
}

var _templateMediaList = {
    "image" : [],
    "audio" : [],
    "video" : []
}
