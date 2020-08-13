import React, { useState } from 'react';

import Choices from './containers/Choices';
import MandoGrid from './containers/MandoGrid';
import OverallSort from './containers/OverallSort';

import logo from './logo150.webp';
import './App.scss';

function App() {

  const [mode, setMode] = useState("scales");
  const [rootNote, setRootNote] = useState("");
  const [chordVariation, setChordVariation] = useState("");
  const [scaleVariation, setScaleVariation] = useState("");
  const [display, setDisplay] = useState("tab");

  const handleDisplayChange = (e) => {
    console.log(e.target.value);
    setDisplay(e.target.value);
  }

  const handleModeChange = (e) => {
    console.log(e.target.value);
    setMode(e.target.value);
  }

  const handleRootNoteChange = (e) => {
    console.log(e.target.value);
    setRootNote(e.target.value);
  }

  const handleChordVariationChange = (e) => {
    console.log(e.target.value);
    setChordVariation(e.target.value);
  }

  const handleScaleVariationChange = (e) => {
    console.log(e.target.value);
    setScaleVariation(e.target.value);
  }

  return (
    <div className="App">
      <header>
        <img src={logo} className="logo" alt="logo" />
      </header>
      <OverallSort 
        display={display} 
        mode={mode} 
        handleDisplayChange={handleDisplayChange} 
        handleModeChange={handleModeChange}
      />
      <MandoGrid />
      <Choices 
        rootNote={rootNote} 
        chordVariation={chordVariation} 
        scaleVariation={scaleVariation} 
        handleRootNoteChange={handleRootNoteChange} 
        handleChordVariationChange={handleChordVariationChange} 
        handleScaleVariationChange={handleScaleVariationChange} 
        mode={mode}
      />
      <footer>
        A Jon Le Marquand website.
      </footer>
    </div>
  );
}

export default App;
