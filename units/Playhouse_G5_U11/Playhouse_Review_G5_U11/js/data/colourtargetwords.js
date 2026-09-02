var colourtargetwords_data = {
     "mainTitle"             : "",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : "<span class='green_text'>1</span>Colour it!  Colour the indirect object in each sentence <b class='red_text'>red</b>.",
    "subTitleTextRight"     : "",

    /*
       Each sentence is split into words.
       "needsColour": true -> this word is part of the indirect object and
       must be coloured red. A multi-word indirect object (e.g. "his friend")
       is marked by giving BOTH words needsColour: true.
    */
    "questions": [
        {
            "words": [
                { "text": "Mum",   "needsColour": false },
                { "text": "gave",  "needsColour": false },
                { "text": "me",    "needsColour": true  },
                { "text": "some",  "needsColour": false },
                { "text": "toys.", "needsColour": false }
            ]
        },
        {
            "words": [
                { "text": "Joe",      "needsColour": false },
                { "text": "brought",  "needsColour": false },
                { "text": "me",       "needsColour": true  },
                { "text": "a",        "needsColour": false },
                { "text": "birthday", "needsColour": false },
                { "text": "present.", "needsColour": false }
            ]
        },
        {
            "words": [
                { "text": "Jerry",  "needsColour": false },
                { "text": "got",    "needsColour": false },
                { "text": "his",    "needsColour": true  },
                { "text": "friend", "needsColour": true  },
                { "text": "a",      "needsColour": false },
                { "text": "cake.",  "needsColour": false }
            ]
        },
        {
            "words": [
                { "text": "The",      "needsColour": false },
                { "text": "mother",   "needsColour": false },
                { "text": "made",     "needsColour": false },
                { "text": "her",      "needsColour": true  },
                { "text": "son",      "needsColour": true  },
                { "text": "a",        "needsColour": false },
                { "text": "birthday", "needsColour": false },
                { "text": "cake.",    "needsColour": false }
            ]
        }
    ]
}