import React from "react";

const Letter = (props) => {
  const letter = props.upper ? props.letter.toUpperCase() : props.letter;
  const color = props.color;
  const fontSize = props.fontSize;

  return <span style={{ color: color, fontSize: `${fontSize}px` }}>{letter}</span>;
};

export default Letter;

