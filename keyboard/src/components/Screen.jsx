import React, { useState } from "react";
import Letter from "./Letter";
import KeyBord from "./Keyboard";
let counter = 0;
const Screen = () => {
  const [message, setMessage] = useState([]);
  function createNewLetter(letter, color, fontSize) {
    setMessage( old => [...old, 
      <Letter
        letter={letter}
        color={color}
        fontSize={fontSize}
        key={counter++}
      />,
    ]);
  }

  // createNewLetter("a", "red", 26);
  // createNewLetter("A", "black", 12);
  return (
    <div>
      <h2>Screen</h2>
      {message}
      <KeyBord lenguege={"English"} showLetter={createNewLetter} />
    </div>
  );
};

export default Screen;
