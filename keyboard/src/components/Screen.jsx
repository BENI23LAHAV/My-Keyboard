import React, { useState } from "react";
import Letter from "./Letter.jsx";
import KeyBord from "./Keyboard.jsx";
let counter = 0;

const history = [];
const Screen = () => {
  const [message, setMessage] = useState([]);
  function createNewLetter(
    letter,
    color = "purple",
    fontSize = "26",
    upper,
  ) {
    setMessage((old) => [
      ...old,
      <Letter
        letter={letter}
        color={color}
        fontSize={fontSize}
        upper={upper}
        key={counter++}
      />,
    ]);
    history.push(message);
  }
  // console.log(history);
  function undo() {
    setMessage(history[history.length - 1]);
    history.pop();
  }
  function del() {
    setMessage((old) => {
      history.push([...old]);   //   need to understand way it need the three points here 
      old.pop();
      console.log(old);
      return [...old];
    });
    // history.push(message);
  }
  return (
    <div className="page">
      <h2>Screen</h2>
      <p>{message}</p>
      <KeyBord
        lenguege={"English"}
        showLetter={createNewLetter}
        del={del}
        undo={undo}
      />
    </div>
  );
};

export default Screen;
