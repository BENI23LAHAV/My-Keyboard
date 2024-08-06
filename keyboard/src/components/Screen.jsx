import { useState } from "react";

/**-----------Screen----------- */
const x = "Itamerrrrrrrrrrrrrrrr";
const Screen = (props) => {
  const [screen, setScreen] = useState("");
  return <div id="screen">{screen}</div>;
};

export default Screen;
