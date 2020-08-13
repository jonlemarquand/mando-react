import React from 'react';

import RadioButton from '../components/RadioButton';

const Choices = ({ rootNote, chordVariation, scaleVariation, handleRootNoteChange, handleChordVariationChange,handleScaleVariationChange, mode }) => {
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
      } else {
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

export default Choices;