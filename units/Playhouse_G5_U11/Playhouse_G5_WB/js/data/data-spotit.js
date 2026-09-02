// data-spotit.js
var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        { 'audiourl': '../audios/demo.mp3' },
        { 'url': '' }, { 'url': '' }, { 'url': '' }
    ],
}

// كل [[...]] هاد جوا النص هو عبارة "Word Power" لازم الطالب يحوّطها بدائرة
var spotit_data = {
        "mainTitle": "../images/pages/sb-icons/CONVERSATION.jpg ",
    "mainTitleIcon": "",
    "mainTitleIconPos": {"right": "90px"},
    "mainTitleAudio": "../audios/p55/CONVERSATION.mp3",
    "subTitleTextLeft": "<span class='blue_text'>2</span> Spot it! Can you spot the Word Power phrases used in this conversation? Circle them.",
    "subTitleTextRight": "",
    "subTitleIcons": [""],
    "subTitleAudio": "../audios/p55/2_Spot_it!_Can_you_spot_the_Word_Power_phrases_used_in_this_conversation_Circle_them.mp3",

    "images" : [
        "../images/pages/activities/0.png",
        "../images/pages/activities/1.png"
    ],

    "lines" : [
        { "speaker": "Jack",  "text": "Hello?" },
        { "speaker": "Henry", "text": "Hello. May I [[speak with]] Jack?" },
        { "speaker": "Jack",  "text": "[[Speaking]]. [[Who is calling]], please?" },
        { "speaker": "Henry", "text": "It's me, Henry." },
        { "speaker": "Jack",  "text": "Oh! Hello, Henry! How are you?" },
        { "speaker": "Henry", "text": "I'm fine, thank you. How are you?" },
        { "speaker": "Jack",  "text": "I'm fine. It's been a long time since you've called." },
        { "speaker": "Henry", "text": "I called last week. Someone else answered and told me, '[[Wrong number]]'." },
        { "speaker": "Jack",  "text": "You must have [[dialled the wrong phone number]] [[by mistake]]." },
        { "speaker": "Henry", "text": "I also called another time and it was [[busy]]." },
        { "speaker": "Jack",  "text": "Sometimes I'm [[on the phone]], so my line is [[busy]]." },
        { "speaker": "Henry", "text": "Why don't we [[meet up]] some time? How about next Tuesday?" },
        { "speaker": "Jack",  "text": "Tuesday would be fine. See you on Tuesday, then! Bye!" },
        { "speaker": "Henry", "text": "Bye!" }
    ]
};