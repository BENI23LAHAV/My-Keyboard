import React from "react";

const Letter = (props) => {
  const letter = props.upper ? props.letter.toUpperCase() : props.letter;
  const color = props.color;
  const fontSize = props.fontSize;

  return <p style={{ color: color, fontSize: fontSize }}>{letter}</p>;
};

export default Letter;
