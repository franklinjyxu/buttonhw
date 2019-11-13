import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Buttoncreation />
      </div>
  );
}

function Buttoncreation () {
  
  const [activate, setActivate] = useState("");

  function handleClick(e) {
    setActivate(e.target.id);
  } 


  return (
  <div className = "all">
  <p>
  <button id="first" className={(activate==="first") ? "active" : ""} onClick={handleClick}>First Button</button>
  <button id="second" className={(activate==="second") ? "active" : ""} onClick={handleClick}>Second Button</button>
  <button id="third" className={(activate==="third") ? "active" : ""} onClick={handleClick}>Third Button</button>
  </p>
  <div className = "greyButton">
  <p>
  <button id="grey">You have selected: {
    (activate ==="first") ?
    "First Button" : ""} {(activate ==="second") ? "Second Button" : ""} {(activate ==="third") ? "Third Button" : ""}</button>
  </p>
  </div>
  </div>
  );

}

export default App;
