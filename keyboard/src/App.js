import "./App.css";
import KeyBord from "./components/Keyboard";
function App() {

  function createLetter(target) {
    console.log(target);
  }
  return (
    <div className="App">
      <div onClick={(event)=>createLetter(event.target)}><KeyBord lenguege={"English"}/></div>
      
    </div>
  );
}

export default App;
