var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/p33/1.mp3",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
  ],
};

var readpassages_data = {
  mainTitle: "../images/pages/sb-icons/WRITING.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/p33/WRITING.mp3",
  subTitleTextLeft:
    '<span class="blue_text">1</span> Read about it! <br/> Informational writing is used to inform or explain something to the reader. You can find informational texts about real people, places or events in newspapers, biographies, books and magazines. Read the passages below and tick the passage that is an informational text.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/p33/1_Read_about_it!.mp3",

  select: "single", // single (or) multiple
  shape: "tickbox", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
  bgcolor: "none",
  numbering: "none",

  bgcolor: "none",

  questions: [
    {
      answer: [1], // 1-indexed: the Benjamin Franklin passage is the informational one
      audio: "no",
      audioenable: "default",
      options: [
        {
          image: "../images/pages/activities/franklin_portrait.png",
          imagePosition: "left",
          imageShape: "rect",
          // italicized publication names use <em> - keep as-is, it's just text
          text: "Benjamin Franklin was born in 1706 in Boston, Massachusetts. He came from a big family. He had 16 brothers and sisters. When Benjamin was 15, his brother started the first newspaper in Boston. It was called <em>The New England Courant.</em> He worked for the newspaper for a short time, but he was not happy. So, he went to Philadelphia and worked as a printer. In 1729, he bought a newspaper business. The newspaper was the <em>Pennsylvania Gazette.</em> He was very busy. In 1733, he started <em>Poor Richard&rsquo;s Almanac.</em> This book came out every year. Almanacs have information about weather and crops.<br><br>Benjamin Franklin was also an inventor. In 1743, he invented a very good stove called the Franklin stove. He invented flippers to make it easier for people to swim. He invented bifocal glasses. He also invented the first milometer. He retired from his newspaper business in 1749. Then he became busy with science. Benjamin Franklin was also very interested in American politics. He helped Thomas Jefferson write the Declaration of Independence in 1776. Franklin died on April 17, 1790. He was 84 years old.",
          audio: "no",
          audioenable: "default",
        },
        {
          image: "../images/pages/activities/1_p33.jpg",
          imagePosition: "right",
          imageShape: "circle",
          text: "My name is Matt. I am in the fifth grade. Our class is learning about Spain. We have learnt many things about Spain. Our teacher is Mrs. Sanchez. She lived in Mexico until she was 15 years old. Then she moved to the United States with her family. Mrs. Sanchez speaks Spanish and English. We are learning how to speak Spanish in our class.<br><br>Every Friday afternoon, we do something fun in our class. Last week we learnt the Spanish Hat Dance. Mrs. Sanchez taught this dance to our class. I love the music that Mrs. Sanchez played while we danced. Everyone had a great time. We will practise the Hat Dance again this week. We are going to perform the Hat Dance at a school programme next week. It&rsquo;s a great dance!",
          audio: "no",
          audioenable: "default",
        },
      ],
    },
  ],
};
