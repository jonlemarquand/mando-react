import React, { useState } from 'react';
import {
  BrowserView,
  MobileView,
} from "react-device-detect";

import Choices from './containers/Choices';
import MandoGrid from './containers/MandoGrid';
import MobileOverlay from './containers/mobileOverlay/MobileOverlay';
import OverallSort from './containers/OverallSort';

import logo from './logo150.webp';
import './App.scss';

function App() {

  const [mode, setMode] = useState("fret");
  const [rootNote, setRootNote] = useState("c");
  const [chordVariation, setChordVariation] = useState("major");
  const [scaleVariation, setScaleVariation] = useState("major");
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
      <BrowserView>
        <OverallSort 
          display={display} 
          mode={mode} 
          handleDisplayChange={handleDisplayChange} 
          handleModeChange={handleModeChange}
        />
        <MandoGrid 
          rootNote={rootNote} 
          chordVariation={chordVariation} 
          scaleVariation={scaleVariation}
          mode={mode}
          display={display}
        />
        <Choices 
          rootNote={rootNote} 
          chordVariation={chordVariation} 
          scaleVariation={scaleVariation} 
          handleRootNoteChange={handleRootNoteChange} 
          handleChordVariationChange={handleChordVariationChange} 
          handleScaleVariationChange={handleScaleVariationChange} 
          mode={mode}
        />
      </BrowserView>
      <MobileView viewClassName="mobile-content">
        <MobileOverlay 
          rootNote={rootNote} 
          chordVariation={chordVariation} 
          scaleVariation={scaleVariation}
          mode={mode}
          display={display}
          handleRootNoteChange={handleRootNoteChange} 
          handleChordVariationChange={handleChordVariationChange} 
          handleScaleVariationChange={handleScaleVariationChange}
          handleDisplayChange={handleDisplayChange} 
          handleModeChange={handleModeChange} 
        />
      </MobileView>
      <footer>
        A Jon Le Marquand website.
      </footer>
    </div>
  );
}

export default App;
