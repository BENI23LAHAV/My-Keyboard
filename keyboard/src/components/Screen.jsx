import React, { useState } from "react";
import Letter from "./Letter";
import KeyBord from "./Keyboard";
let counter = 0;
const history = [];
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
    history.push(message);
  }
  console.log(history);
  return (
    <div>
      <h2>Screen</h2>
      <p>{message}</p>
      <KeyBord lenguege={"English"} showLetter={createNewLetter} />
    </div>
  );
};

export default Screen;
