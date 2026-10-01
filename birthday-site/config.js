/* ============================================================
   EDIT THIS FILE to personalise the website.
   - Photos: drop files in the "images" folder, matching the names below
     (or change the names here). jpg/png/webp all work.
   - Songs: drop mp3 files in the "songs" folder, matching names below.
   - Anything still in [SQUARE BRACKETS] is a placeholder: replace the text.
   - If a file is missing, the site just shows a tasteful placeholder.
   ============================================================ */
const CFG = {
  name: "Ananyaa",
  birthday: [2006, 10, 2],

  // [title, line shown, your memory/caption, photo file]
  timeline: [
    [
      "Growing up",
      "Somewhere along the way, you became you.",
      "Look at you now. You are a beautiful person, inside and out.",
      "images/timeline1.jpg",
    ],
    [
      "this",
      "Some memories stayed. Some people changed. You did too.",
      "this shows how caring youve been",
      "images/timeline2.jpg",
    ],
    ["2026", "And here you are.", "DIVAAAA", "images/timeline3.jpg"],
  ],

  // Gallery: add or remove lines freely. "meta" (date/place) is optional.
  photos: [
    { src: "images/photo1.jpg", cap: "That smile."},
    { src: "images/photo2.jpg", cap: "One of those days." },
    { src: "images/photo3.jpg", cap: "You looked genuinely happy here." },
    { src: "images/photo4.jpg", cap: "white hearts wala filters never goes wrong hehe" },
    { src: "images/photo5.jpg", cap: "the kinda photo a warrior carries to remind him about his wife" },
  ],

  // "The little things": [heading, your own observation]
  things: [
    ["Your laugh", "that sweet smile on your face when you laugh"],
    ["Your weird little habits", "binging everything you can get your hands on"],
    ["The way you get excited", "the way your eyes light up when you talk about something you love"],
    ["The things you care about", "you never give up on me"],
    ["The things you pretend you don't care about", "you always care about me"],
    ["Your random opinions", "that you hate honey"],
    ["Your stubbornness", "you always have to be right"],
    ["Your kindness", "you always help me when I need it"],
    [
      "Your ability to make ordinary moments memorable",
      "Some people leave an impression without even trying.",
    ],
  ],

  // Songs: t = title, a = artist, why = why it's here, src = mp3 file
  songs: [
    { t: "Yellow",
       a: "coldplay",
      src: "songs/song1.mp3" },
    {
      t: "Let me down slowly",
      a: "Alec Benjamin",
      src: "songs/song2.mp3",
    },
    {
      t: "A Thousand Years",
      a: "Christina Perri",
      src: "songs/song3.mp3",
    },
  ],
};
