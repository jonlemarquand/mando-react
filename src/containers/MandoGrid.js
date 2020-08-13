import React from 'react';

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

export default MandoGrid;