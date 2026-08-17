var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(87, 91, 160)",
    "type":"slider",
    "playListData" : [
        {
          'audiourl': '../audios/page_16/1.mp3',
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
var reading_data = {
    "mainTitle": "../images/pages/sb-icons/reading.png",
    "mainTitleIcon": "../images/pages/sb-icons/adv_icon_1.png",
    "mainTitleIconPos": {"right": "80px"},
    "mainTitleAudio": "../audios/page_16/READING.mp3",
    "subTitleTextLeft": "<span class='title-order'>1</span> Read about it!",
    "subTitleTextRight": "Read about the survey",
    "subTitleIcons": [""],
    "subTitleAudio": "../audios/page_16/1_Read_about_it!.mp3",
    "numberofcolumns":  1,
    "slides": [
        {
            "parent_class_name": "",
            "mainImage": "../images/pages/news-letter/2-img-1.png",
            
            'listen': {
                "audio": ["../audios/page_16/Pg4_1.2_Adult_Lady.mp3","../audios/page_16/Pg4_1.3_Adult Lady.mp3", "../audios/page_16/Pg4_1.4_Adult Lady.mp3"],
                "titlesAudio":[""],
                "titleTexts":[""],
                "top_image":["../images/pages/news-letter/1-conv-img.png"],
                "second_image":[""],
                "questions": [
                  {
                      "question"              : "",
                      "image"                 : "",
                      "answer"                : [1],
                      "audio"                 : "no",
                      "audioenable"           : "default", // correct (or) default
                      "options"               : [
                          {
                              "text"          : "<b>a</b> &nbsp; Eric’s job as an anchorman",
                              "image"         : "",
                              "audio"         : "no",
                              "audioenable"   : "default", // correct (or) default
                          },
                          {
                              "text"          : "<b>b</b> &nbsp; Eric only works on weekdays.",
                              "image"         : "",
                              "audio"         : "no",
                              "audioenable"   : "default", // correct (or) default
                          },
                          {
                              "text"          : "<b>c</b> &nbsp; All the people who work with Eric.",
                              "image"         : "",
                              "audio"         : "no",
                              "audioenable"   : "default", // correct (or) default
                          },
                          
                      ]
                  },
              ]
            },
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            "title":"<span class='blue_text'>My Hobbies</span>",
            "array_text": [ 
                "Many kids benefit from having a hobby. Hobbies are fun and very interesting. "+
                "Some have a hobby without realising it because it is something they like doing alone or with friends. "+
                "A survey of British kids aged 10–15 found that playing football is the most popular hobby, followed by video gaming, "+
                "basketball and skateboarding. Rock climbing is my favourite, but it is a bit risky," +
                "so kids have a hard time getting their parents to let them do it.",
                "Surfing the internet, texting and crafts (like making bracelets) are other favourites. Kids don’t think that a hobby can be educational, "+
                "but it is. It allows them to use their interests and helps them to develop expertise through hours of enjoyment. "+
                "Whatever it is that they want to do as a hobby, they should enjoy doing it. "
                    ,
                // ////////////////////////////////////////////////
                // "<br>then we should be there at least two hours before our flight leaves. That was a good idea. Our check-in was so easy. This year we are travelling with my little brother, Dean. "+
                // "He is only eight months old. My mum says that travelling with a baby isn't hard as long as you have got a good plan. This is what she says we should do:"+
                //     "<br> <b> 1 </b> Keep your passports close by! My dad puts all of our passports in his front pocket."+
                //     " This way he can get to everything quickly, and he can put them back quickly as well.",
                // ///////////////////////////////////////////////
                // "<br> 2 &nbsp; Keep snacks and drinks at the top of your luggage!"+
                // "My mum says that she always packs Dean's formula and snacks for me at the top of her hand luggage, so she" +
                // "can open the bag and get it out easily. That works out well for me too. Plus,"+
                // "Mum says that if Dean gets hungry, she can feed him quickly because his formula is easy to get to.",
                // //////////////////////////////////////////////
                // "<br> 3 &nbsp; Bring everything you need and more! My mum told us that when she and Dad travelled last time, they had some"+
                //     "disasters. Everything went wrong! So this time, my mum says she is bringing more than enough." +
                //     "She packed extra wipes, extra snacks, some extra clothes for Dean and an extra T-shirt for me. "+
                //     "Make sure that when YOU pack your bag, you put in lots of things that will keep you busy during the flight." +
                //     "I packed my HeeBeeJeeBee game and some extra batteries.",
                // //////////////////////////////////////////////
                // "<br> 4 &nbsp; Keep it all together! This is funny because my dad says that this means more than what you"+
                //     "think! First, after you arrive at the check-in counter and they give you your boarding card,"+ 
                //     "your e-ticket and your passport, make sure you keep them all in one place. After you pass"+
                //     "security and go to your gate, everything will be right where you want it. My dad also says"+ 
                //     "be ready for anything, so ‘Keep it all together!’ also means that you shouldn't get angry"+ 
                //     "or upset when something goes wrong. Just breathe, relax and have a good time!",
              
            ],
        },
    ]
}

var mcq_data = {    
    "layout"                : 1,
    "numinrow"              : [[1]],
    "mainTitle"             : "../images/pages/sb-icons/conv_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/conv_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "90px"},
    "mainTitleAudio"        : "../audios/page_16/under.mp3",
    "subTitleTextLeft"      : "",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/page_16/under.mp3",
    "subTitleAudio"         : "../audios/page_16/under.mp3", 
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "image"                 : "",
    "numbering"             : "number",
    "numberstartfrom"       :  1, 
    "numberofcolumns"       :  1,
    "title"                 : "What is the main idea of this text?",
    "questions"             : [
        {
            "question"              : "",
            "image"                 : "",
            "answer"                : [1],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "options"               : [
                {
                    "text"          : "<b>a</b> &nbsp; Eric’s job as an anchorman",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>b</b> &nbsp; Eric only works on weekdays.",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>c</b> &nbsp; All the people who work with Eric.",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                
            ]
        },
    ]
}
