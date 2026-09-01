var linedraw_data = {    
    "layout"                : 1,
    "mainTitle": "",
    "mainTitleIcon": "",
    "mainTitleIconPos": {"right": "-20px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : "<span class='green_text'>3</span> Match it! Match each situation with its correct indirect question.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "image"                 : "",
    "connect"               : "multiple", // single (or) multiple
    "linecolor"             : "#6d6d6d",
    "path"                  : "line",
    "strokewidth"           : "4",
    "nodecolor"             : "rgb(97, 250, 110)",
    "nodeselectioncolor"    : 'rgb(32, 145, 37)', 
    "questions"             : {
        "drags"             : [
            {
            
                "text"          : "1 You are waiting in a restaurant, and the waiter did not serve you yet.",
				"image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            },
            {
            
                "text"          : "2 You are ready to make your order.",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "3 Your steak is still chewy.",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "4 Your soup is cold.",
				"image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            }
        ],
        "drops"                 : [
            {
                "text"          : "Would you mind placing my order for me?",
                "image"         : "no",
                "answer"        : [2],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "Do you happen to know if the waiter is available to help me?",
                "image"         : "no",
                "answer"        : [1],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "Would you please heat the soup up for me?",
                "image"         : "no",
                "answer"        : [4],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "Could you please cook this steak a little longer?",
                "image"         : "no",
                "answer"        : [3],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            }
        ]
    }
}               