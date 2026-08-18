//  ****************************************** //
//  WordSearch - Data file
//  Each word stores its exact cell path [row,col] in the grid (0-indexed),
//  so validation just needs to compare the student's dragged path against
//  this list (in either direction) - no re-parsing of the grid is needed.
//
//  Grid + word paths below were transcribed and verified against the
//  supplied "Word Search!" reference image (16x16 grid, 12 words).
//  Every path was re-checked by reconstructing the word letter-by-letter
//  from the grid coordinates to confirm it spells correctly.
//  ****************************************** //
var wordsearch_data = {
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft: "Find the words above in the word search.",
  subTitleAudio: "../audios/under.mp3",

  gridSize: 16,

  grid: [
    ["H","A","N","D","I","G","N","T","Z","E","H","H","E","Y","R","Q"],
    ["C","C","H","O","E","D","D","C","D","O","N","A","T","E","X","K"],
    ["O","X","Q","S","E","M","F","H","F","N","U","J","E","G","N","T"],
    ["N","M","A","N","F","T","N","E","X","C","I","T","I","N","G","R"],
    ["F","U","N","D","R","A","I","S","E","R","N","R","N","R","O","G"],
    ["I","F","D","M","V","E","I","P","L","U","E","N","N","I","E","T"],
    ["D","U","M","A","E","E","C","H","L","D","E","L","T","M","N","T"],
    ["E","L","M","R","B","M","N","O","S","F","D","T","Q","S","N","C"],
    ["N","P","R","T","N","H","V","T","H","E","Y","Z","F","A","S","J"],
    ["T","E","Q","I","S","Z","O","O","U","E","W","F","I","O","P","W"],
    ["O","W","D","A","O","E","W","G","E","R","L","I","T","N","F","A"],
    ["A","W","R","L","M","D","K","R","O","I","O","M","N","I","L","K"],
    ["S","Z","A","A","M","B","Y","A","F","F","E","U","E","G","T","O"],
    ["N","X","A","R","A","B","Y","P","M","D","R","N","S","T","A","E"],
    ["H","I","A","T","R","M","N","H","M","V","B","A","S","O","E","S"],
    ["J","L","P","S","F","I","O","Y","L","F","T","Z","S","R","Q","V"]
  ],

  // left column of the word list (as in the reference image)
  wordsLeft: ["w_exciting", "w_confident", "w_adventurous", "w_helmet"],
  // right column of the word list
  wordsRight: [
    "w_martialarts",
    "w_fitness",
    "w_photography",
    "w_sewing",
    "w_volunteer",
    "w_donate",
    "w_fundraiser",
    "w_needy",
  ],

  words: [
    {
      id: "w_exciting",
      display: "exciting",
      cells: [
        [
          [3, 7],
          [3, 8],
          [3, 9],
          [3, 10],
          [3, 11],
          [3, 12],
          [3, 13],
          [3, 14],
        ],
      ],
    },
    {
      id: "w_confident",
      display: "confident",
      cells: [
        [
          [1, 0],
          [2, 0],
          [3, 0],
          [4, 0],
          [5, 0],
          [6, 0],
          [7, 0],
          [8, 0],
          [9, 0],
        ],
      ],
    },
    {
      id: "w_adventurous",
      display: "adventurous",
      cells: [
        [
          [3, 2],
          [4, 3],
          [5, 4],
          [6, 5],
          [7, 6],
          [8, 7],
          [9, 8],
          [10, 9],
          [11, 10],
          [12, 11],
          [13, 12],
        ],
      ],
    },
    {
      id: "w_helmet",
      display: "helmet",
      cells: [
        [
          [8, 8],
          [9, 9],
          [10, 10],
          [11, 11],
          [12, 12],
          [13, 13],
        ],
      ],
    },
    {
      id: "w_martialarts",
      display: "martial arts",
      cells: [
        [
          [5, 3],
          [6, 3],
          [7, 3],
          [8, 3],
          [9, 3],
          [10, 3],
          [11, 3],
          [12, 3],
          [13, 3],
          [14, 3],
          [15, 3],
        ],
      ],
    },
    {
      id: "w_fitness",
      display: "fitness",
      cells: [
        [
          [8, 12],
          [9, 12],
          [10, 12],
          [11, 12],
          [12, 12],
          [13, 12],
          [14, 12],
        ],
      ],
    },
    {
      id: "w_photography",
      display: "photography",
      cells: [
        [
          [5, 7],
          [6, 7],
          [7, 7],
          [8, 7],
          [9, 7],
          [10, 7],
          [11, 7],
          [12, 7],
          [13, 7],
          [14, 7],
          [15, 7],
        ],
      ],
    },
    {
      id: "w_sewing",
      display: "sewing",
      cells: [
        [
          [7, 8],
          [8, 9],
          [9, 10],
          [10, 11],
          [11, 12],
          [12, 13],
        ],
      ],
    },
    {
      id: "w_volunteer",
      display: "volunteer",
      cells: [
        [
          [8, 6],
          [7, 7],
          [6, 8],
          [5, 9],
          [4, 10],
          [3, 11],
          [2, 12],
          [1, 13],
          [0, 14],
        ],
      ],
    },
    {
      id: "w_donate",
      display: "donate",
      cells: [
        [
          [1, 8],
          [1, 9],
          [1, 10],
          [1, 11],
          [1, 12],
          [1, 13],
        ],
      ],
    },
    {
      id: "w_fundraiser",
      display: "fundraiser",
      cells: [
        [
          [4, 0],
          [4, 1],
          [4, 2],
          [4, 3],
          [4, 4],
          [4, 5],
          [4, 6],
          [4, 7],
          [4, 8],
          [4, 9],
        ],
      ],
    },
    {
      id: "w_needy",
      display: "needy",
      cells: [
        [
          [4, 10],
          [5, 10],
          [6, 10],
          [7, 10],
          [8, 10],
        ],
      ],
    },
  ],
};