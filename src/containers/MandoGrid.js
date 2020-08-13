import React from 'react';

import NoteCircle from '../components/NoteCircle';

import AllStrings from '../data/AllStrings';
import ScalesData from '../data/scales.json';

const MandoGrid = ({ rootNote, mode, display, chordVariation, scaleVariation}) => {

    // 1. Select Options
    // 2. Filter Data Based on Options
    // 3. Render Grid
    // 4. Render NoteCircles

    let Strings = [];

    const currentSelection = ScalesData.c.root;
    const getMandoInfo = () => {
        if (mode === 'chords') {

        } else if (mode === 'scales') {
            console.log('scales selected');
        } else if (mode ==='arpeggios') {

        } else {
            Strings = AllStrings;
        }
    }
    getMandoInfo();
    console.log(AllStrings);
    const StringsView = Strings.map((string) => {
        if (string.tab === "0") {
        return (<div className={`tab tab${string.tab} string${string.string} no-border`}>
            <NoteCircle noteName={string.noteName}/>
        </div>)
        } else {
        return (<div className={`tab tab${string.tab} string${string.string}`}>
            <NoteCircle noteName={string.noteName}/>
        </div>)   
        }
    })

    const gridStrings = []
    // [ {1,1}, {1,2}

    for (let i = 1; i < 5; i++) {
      for (let j = 1; j < 25; j++) {
        gridStrings.push(
          <div className={`tab tab${j} string${i}`}>
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
        { StringsView }
      </div>
    )
}

export default MandoGrid;