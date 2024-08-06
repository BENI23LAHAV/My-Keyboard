import React from "react";

const Letter = (props) => {
  const letter = props.upper ? props.letter.toUpperCase() : props.letter;
  const color = props.color;
  const fontSize = props.fontSize;
  console.log(letter.charCodeAt(0));
  return letter.charCodeAt(0) ? (
    <span style={{ color: color, fontSize: `${fontSize}px` }}>{letter}</span>
  ) : (
    <span>{` `}</span>
  );
};

export default Letter;
