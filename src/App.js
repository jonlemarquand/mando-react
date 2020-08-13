import React, { useState } from 'react';

import RadioButton from './components/RadioButton';

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

  const OverallSort = () => {



    return (
      <div className="overall-sort">
        <div className="display-sort" onChange={handleDisplayChange}>
          <h2>Display:</h2>
          <RadioButton name="Tab" slug="tab" group="display" isChecked={display}/>
          <RadioButton name="Mirror" slug="mirror" group="display" isChecked={display}/>
        </div>
        <div className="mode-sort" onChange={handleModeChange}>
          <h2>Mode:</h2>
          <RadioButton name="Scales" slug="scales" group="mode-choice" isChecked={mode}/>
          <RadioButton name="Chords" slug="chords" group="mode-choice" isChecked={mode}/>
          <RadioButton name="Arpeggios" slug="arpeggios" group="mode-choice" isChecked={mode}/>
        </div>
      </div>
    )
  }

  const MandoGrid = () => {

    const gridStrings = []
    // [ {1,1}, {1,2}

    for (let i = 1; i < 5; i++) {
      for (let j = 1; j < 25; j++) {
        gridStrings.push(
          <div className={`tab tab${j} string${i}`}>
            <div className="note-circle">Bb</div>
          </div>
        )
      }
    }
    const markers = ["0", 3, 5, 7, 10, 12, 15, 17, 20, 22, 24]
    const gridMarkers = markers.map(marker =>
      <div className={`no-border tab tab${marker} marker`}>{marker}</div>
    )
    return (
      <div className="mando-tabs">
        { gridMarkers }
        { gridStrings }
      </div>
    )
  }

  const Choices = () => {
    const rootNotesOptions = [
      {
        "name": "C",
        "slug": "c"
      },
      {
        "name": "C#/Db",
        "slug": "db"
      },
      {
        "name": "D",
        "slug": "d"
      },
      {
        "name": "D#/Eb",
        "slug": "eb"
      },
      {
        "name": "E",
        "slug": "e"
      },
      {
        "name": "F",
        "slug": "f"
      },
      {
        "name": "F#/Gb",
        "slug": "gb"
      },
      {
        "name": "G",
        "slug": "g"
      },
      {
        "name": "G#/Ab",
        "slug": "ab"
      },
      {
        "name": "A",
        "slug": "a"
      },
      {
        "name": "A#/Bb",
        "slug": "bb"
      },
      {
        "name": "B",
        "slug": "b"
      }
    ]

    const rootNotesChoices = rootNotesOptions.map((root) => 
      <RadioButton name={root.name} slug={root.slug} group="root-choice" isChecked={rootNote}/>
    );

    const ChordVariationOptions = [
      {
        "name": "major",
        "slug": "major"
      },
      {
        "name": "minor",
        "slug": "minor"
      },
      {
        "name": "aug",
        "slug": "aug"
      },
      {
        "name": "dim",
        "slug": "dim"
      },
      {
        "name": "6",
        "slug": "sixth"
      },
      {
        "name": "7",
        "slug": "seventh"
      },
      {
        "name": "maj7",
        "slug": "majseven"
      },
      {
        "name": "m7",
        "slug": "minseven"
      },
      {
        "name": "sus2",
        "slug": "sustwo"
      },
      {
        "name": "sus4",
        "slug": "susfour"
      },
    ]

    const ChordVariationChoices = ChordVariationOptions.map((chord) => 
      <RadioButton name={chord.name} slug={chord.slug} group="chord-choice" isChecked={chordVariation}/>
    );

    const scaleVariationOptions = [
      {
        "name": "major",
        "slug": "major"
      },
      {
        "name": "minor",
        "slug": "minor"
      },
      {
        "name": "harmonic minor",
        "slug": "hminor"
      },
      {
        "name": "melodic minor",
        "slug": "mminor"
      },
      {
        "name": "blues",
        "slug": "blues"
      },
      {
        "name": "pentatonic major",
        "slug": "pmajor"
      },
      {
        "name": "pentatonic minor",
        "slug": "pminor"
      },
    ]

    const ScaleVariationChoices = scaleVariationOptions.map((scale) => 
      <RadioButton name={scale.name} slug={scale.slug} group="scale-choice" isChecked={scaleVariation}/>
    );

    const VariationChoices = () => {
      if (mode === 'chords' || mode === 'arpeggios') {
        return (
          <div className="variation-choices" onChange={handleChordVariationChange}>
            { ChordVariationChoices }
          </div>
        )
      } else if (mode === 'scales') {
        return (
          <div className="variation-choices" onChange={handleScaleVariationChange}>
            { ScaleVariationChoices }
          </div>
        )
      }
    }

    return (
      <div className="choices">
        <div className="root-list">
          <h2>Root Note:</h2>
          <div className="root-choices" onChange={handleRootNoteChange}>
            {rootNotesChoices}
          </div>
        </div>
        <div className="variation-list">
        <h2>Variation:</h2>
          <VariationChoices />
        </div>
      </div>
    )
  }


  return (
    <div className="App">
      <header>
        <img src={logo} className="logo" alt="logo" />
      </header>
      <OverallSort />
      <MandoGrid />
      <Choices />
      <footer>
        A Jon Le Marquand website.
      </footer>
    </div>
  );
}

export default App;
