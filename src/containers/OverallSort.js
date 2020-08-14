import React from 'react';

import RadioButton from '../components/RadioButton';

const OverallSort = ({ display, handleDisplayChange, mode, handleModeChange }) => {

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
          { // <RadioButton name="Chords" slug="chords" group="mode-choice" isChecked={mode}/>
          }
          <RadioButton name="Arpeggios" slug="arpeggios" group="mode-choice" isChecked={mode}/>
        </div>
      </div>
    )
}

export default OverallSort