// data-completeit.js
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

var completeit_data = {
  "mainTitle"             : "",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : "<span class='green_text'>1</span> Complete it! Fill in the blanks with the correct words from the word box.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/under.mp3",
    "wordBank" : [
        "palette", "create", "painting", "mural", "artist", "portrait",
        "paintbrush", "landscape", "sculpture", "materials", "pottery", "background"
    ],

    // كل [_] هون هو فراغ - وترتيب الإجابات بمصفوفة answers لازم يطابق
    // ترتيب ظهور الفراغات بالنص بالضبط
    "text" : "Juanita is a young [_] who loves to [_] art. Last year she learnt how to use clay to make [_]. She used the rest of the clay to make a beautiful [_] of a cat. Right now, she is using her [_] to paint. She is [_] a [_] of her sister. She has a [_] of colours. She is also good at painting the [_] she can see from her bedroom window. Last week she painted a [_] on her bedroom wall. She used many [_] and chose to paint the [_] yellow because it's her favourite colour.",

    "answers" : [
        "artist", "create", "pottery", "sculpture", "paintbrush",
        "painting", "portrait", "palette", "landscape", "mural",
        "materials", "background"
    ]
};