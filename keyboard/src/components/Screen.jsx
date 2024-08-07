import React, { useState } from "react";
import Letter from "./Letter.jsx";
import KeyBord from "./Keyboard.jsx";
let counter = 0;

const history = [];

const Screen = () => {
  const [message, setMessage] = useState([]);
  const [upperAll, setUpperAll] = useState(false);
  function createNewLetter(letter, color = "purple", fontSize = "26", upper) {
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
  function upperAllFunc() {
    setUpperAll(!upperAll);
    if (upperAll) {
      setMessage(message.map((item) => item.props.letter.toUpperCase())); //needs to fix it, right now it returs a different array that not a letter element
    } else {
      setMessage(message.map((item) => item.props.letter.toLowerCase()));
    }
    history.push([...message]);
    console.log(message);
  }
  function clear() {
    setMessage([]);
    history.push([...message]);
  }
  function undo() {
    setMessage(history[history.length - 1]);
    history.pop();
  }
  function del() {
    setMessage((old) => {
      history.push([...old]); //   need to understand why it needs the three points here
      old.pop();
      console.log(old);
      return [...old];
    });
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
        clear={clear}
        upperAllFunc={upperAllFunc}
      />
    </div>
  );
};

export default Screen;
