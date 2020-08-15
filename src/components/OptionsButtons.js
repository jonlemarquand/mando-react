import React from 'react';

import './OptionsButton.scss';

const OptionsButton = ({ onClick }) => {
    return (
        <button className="options-button" onClick={onClick}>
            Options
        </button>
    )
}

export default OptionsButton