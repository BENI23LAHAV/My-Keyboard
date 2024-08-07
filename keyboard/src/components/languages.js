const Hebrew = [
  "א",
  "ב",
  "ג",
  "ד",
  "ה",
  "ו",
  "ז",
  "ח",
  "ט",
  "י",
  "כ",
  "ל",
  "מ",
  "נ",
  "ס",
  "ע",
  "פ",
  "צ",
  "ק",
  "ר",
  "ש",
  "ת",
  "ך",
  "ם",
  "ן",
  "ף",
  "ץ",
  " ",
];
const English = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  " ",
];
const Characters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "{",
  "}",
  "|",
  ":",
  '"',
  "<",
  ">",
  "?",
  "~",
  "`",
  "[",
  "]",
  "\\",
  ";",
  "'",
  ",",
  ".",
  "/",
];
const Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const Emojis = ["😀", "😂", "😍", "😎", "😢", "😡", "👍", "🙏", "🎉", "❤️"];
const languages = (language) => {
  switch (language) {
    case "Hebrew":
      language = Hebrew;

      break;
    case "Numbers":
      language = Numbers;

      break;
    case "Characters":
      language = Characters;

      break;
    case "Emojis":
      language = Emojis;
      break;

    default:
      language = English;
      break;
  }
  return language;
};
export default languages;
