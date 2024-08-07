import React, { useReducer, useState } from "react";
// import Letter from "./Letter";
import "./keyStyle.css";
import languages from "./languages";
/** ----------Our supported languages--------------- */
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

/**------------Createing letter & push it into Screen---------- */
// function createLetter(letter, color, fontSize) {
//   const what = <Letter letter={letter} color={color} fontSize={fontSize} />;
// }
let upper = false;
/**-----------Keyboard component-------------------------- */
const KeyBord = (props) => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const createLetter = props.showLetter;

  // let color = "black";
  // let fontSize = "20";
  // let language = languages();
  const [language, setLanguage] = useState(languages());
  function changeLanguage(value) {
    // console.log(languages(value));
    setLanguage(languages(value));
  }
  const undo = props.undo;
  const del = props.del;
  const toggleUpper = () => {
    upper = !upper;
    forceUpdate();
  };
  return (
    <div id="keyboard">
      {language.map((letter) => (
        <div
          key={letter}
          className="letter"
          onClick={(event, color, fontSize) => {
            createLetter(event.target.innerText, color, fontSize, upper);
            // console.log(event.target.innerText);
          }}>
          {letter}
        </div>
      ))}
      <button onClick={undo}>undo</button>
      <button onClick={del}>delete</button>
      <button className={upper ? "upper" : ""} onClick={toggleUpper}>
        upper
      </button>
      <select onChange={(event) => changeLanguage(event.target.value)}>
        <option value="English">English</option>
        <option value="Hebrew">Hebrew</option>
        <option value="Characters">Characters</option>
        <option value="Emojis">Emojis</option>
      </select>
    </div>
  );
};

export default KeyBord;
