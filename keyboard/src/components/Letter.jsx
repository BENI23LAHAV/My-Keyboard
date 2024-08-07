import React from "react";

const Letter = (props) => {
  const letter = props.upper ? props.letter.toUpperCase() : props.letter;
  const upper = props.upper;
  const color = props.color;
  const fontSize = props.fontSize;
  return letter.charCodeAt(0) ? (
    <span style={
      { color: color, fontSize: `${fontSize}px` }
    } >
      {letter}</span>
  ) : (
    <span>{` `}</span>
  );
};

export default Letter;
