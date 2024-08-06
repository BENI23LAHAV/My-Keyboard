import React from "react";
import "./keyStyle.css";
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
];

const KeyBord = (props) => {
  let lenguege = props.lenguege;
  lenguege === "English" ? (lenguege = English) : (English = Hebrew);
  return (
    <div id="keyboard">
      {lenguege.map((letter) => (
        <div
          key={letter}
          className="letter"
          onClick={() => {
            // פעולה בעת לחיצה על אות
            console.log(`Clicked on: ${letter}`);
          }}>
          {letter}
        </div>
      ))}
    </div>
  );
};

export default KeyBord;
