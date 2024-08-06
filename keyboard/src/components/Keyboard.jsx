import React from "react";
import Letter from "./Letter";
import Screen from "./Screen";
import "./keyStyle.css";

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
  "_",
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
function createLetter(letter, color, fontSize) {
  const what = <Letter letter={letter} color={color} fontSize={fontSize} />;
}
/**-----------Keyboard component-------------------------- */
const KeyBord = (props) => {
  const createLetter2 = props.showLetter;

  let color = "black";
  let fontSize = "20";
  let lenguege = props.lenguege === "English" ? English : Hebrew;

  return (
    <div id="keyboard">
      {lenguege.map((letter) => (
        <div
          key={letter}
          className="letter"
          onClick={(event, color, fontSize) => {
            createLetter2(event.target.innerText, color, fontSize);
            console.log(event.target.innerText);
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default KeyBord;
