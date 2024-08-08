import React, { useReducer, useState } from "react";
import "./keyStyle.css";
import languages from "./languages";
/** ----------Our supported languages--------------- */

/**------------Createing letter & push it into Screen---------- */

let upper = false;

/**-----------Keyboard component-------------------------- */
const KeyBord = (props) => {
  /**colors */
  const [color, setColor] = useState("black");

  /**colors */
  /**fontSize */
  const [fontSize, setFontSize] = useState("26");

  /**fontSize */

  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const createLetter = props.showLetter;

  const [language, setLanguage] = useState(languages());
  function changeLanguage(value) {
    setLanguage(languages(value));
  }
  const undo = props.undo;
  const del = props.del;
  const clear = props.clear;
  const upperAllFunc = props.upperAllFunc;
  const toggleUpper = () => {
    upper = !upper;
    forceUpdate();
  };
  return (
    <>
      <div id="keyboard">
        {language.map((letter) => (
          <div
            key={letter}
            className="letter"
            onClick={(event) => {
              createLetter(event.target.innerText, color, fontSize, upper);
            }}>
            {letter}
          </div>
        ))}
      </div>
      <div className="special">
        <button onClick={undo}>undo</button>
        <button onClick={del}>delete</button>
        <button onClick={clear}>clear All</button>
        <button className={upper ? "upper" : ""} onClick={toggleUpper}>
          upper
        </button>
        <button onClick={upperAllFunc}>upperAllFunc</button>
        <input
          type="number"
          min={10}
          max={40}
          step={2}
          defaultValue={26}
          onChange={(event) => setFontSize(event.target.value)}
        />
        <select onChange={(event) => setColor(event.target.value)}>
          <option value="black" style={{ color: "black" }}>
            Black
          </option>
          <option value="green" style={{ color: "green" }}>
            Green
          </option>
          <option value="red" style={{ color: "red" }}>
            Red
          </option>
          <option value="purple" style={{ color: "purple" }}>
            Purple
          </option>
        </select>
        <select onChange={(event) => changeLanguage(event.target.value)}>
          <option value="English">English</option>
          <option value="Hebrew">Hebrew</option>
          <option value="Characters">Characters</option>
          <option value="Emojis">Emojis</option>
          <option value="Numbers">Numbers</option>
        </select>
      </div>
    </>
  );
};

export default KeyBord;
