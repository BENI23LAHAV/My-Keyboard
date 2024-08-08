import React, { useState } from "react";
import Letter from "./Letter.jsx";
import KeyBord from "./Keyboard.jsx";
let counter = 0;
/**--------------Our history array-------------- */
const history = [];
/**---------------Our screen component---------- */
const Screen = () => {
  /**--------------Use states ------------------ */
  const [message, setMessage] = useState([]);
  const [upperAll, setUpperAll] = useState(false);

  /** -------------Props functions-------------- */
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
    setUpperAll((old) => {
      const newUpperAll = !old;
      console.log(old, newUpperAll);
      setMessage((prevMessage) => {
        return prevMessage.map((item, index) => {
          if (newUpperAll) {
            return (
              <Letter
                key={index}
                upper={newUpperAll}
                letter={item.props.letter}
                color={item.props.color}
                fontSize={item.props.fontSize}
              />
            );
          } else {
            return (
              <Letter
                key={index}
                upper={newUpperAll}
                letter={item.props.letter}
                color={item.props.color}
                fontSize={item.props.fontSize}
              />
            );
          }
        });
      });
      history.push([...message]);
      return newUpperAll;
    });
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
  /**--------------The component returning----------- */
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
