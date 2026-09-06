// data-tickit.js
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

var tickit_data = {
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    "<span class='green_text'>3</span> Tick it! Read the sentences. Put a tick &#10003; in the box if the sentence contains a linking verb..",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/under.mp3",

  // isLinking: true = الجملة فيها فعل رابط (لازم تنحط تِك)
  sentences: [
    { text: "Tommy ate carrots for lunch.", isLinking: false },
    { text: "Amy runs faster than all the other girls.", isLinking: false },
    { text: "That smells delicious!", isLinking: true },
    { text: "She drank juice.", isLinking: false },

    { text: "I am sad.", isLinking: true },
    { text: "He feels sick.", isLinking: true },
    { text: "The rain sounds peaceful.", isLinking: true },
    { text: "She played with her friends.", isLinking: false },

    { text: "He looks hungry.", isLinking: true },
    { text: "Yoshi is happy.", isLinking: true },
    { text: "He slept all day.", isLinking: false },
    { text: "Jenny went shopping.", isLinking: false },
  ],
};
