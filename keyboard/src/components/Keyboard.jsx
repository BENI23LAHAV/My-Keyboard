import React from "react";
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
    <div
      id="keyboard"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(40px, 1fr))",
        gap: "5px",
        padding: "10px",
      }}>
      {lenguege.map((letter) => (
        <div
          key={letter}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
            padding: "10px",
            textAlign: "center",
            cursor: "pointer",
            borderRadius: "5px",
            backgroundColor: "#f0f0f0",
            fontSize: "16px",
          }}
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
