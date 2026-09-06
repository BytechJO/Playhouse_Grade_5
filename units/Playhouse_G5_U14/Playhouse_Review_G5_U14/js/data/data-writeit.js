// data-writeit.js
var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    { audiourl: "../audios/demo.mp3" },
    { url: "" },
    { url: "" },
    { url: "" },
  ],
};

var writeit_data = {
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-20px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    '<span class="green_text">3</span>  Write it! Write a homonym for each word. Then use the homonym in a sentence. ',

  subTitleIcons: [""],
  subTitleTextRight: "",
  subTitleAudio: "../audios/under.mp3",

  questions: [
    { word: "to", homonyms: ["too", "two"] },
    { word: "see", homonyms: ["sea"] },
    { word: "sum", homonyms: ["some"] },
    { word: "know", homonyms: ["no"] },
    { word: "hour", homonyms: ["our"] },
    { word: "allowed", homonyms: ["aloud"] },
    { word: "saw", homonyms: ["soar", "sore"] },
  ],
};
