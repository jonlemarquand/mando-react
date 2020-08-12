import React from 'react';

import './RadioButton.scss';

const RadioButton = ({ name, group, slug, isChecked}) => {
    return(
        <div className="radio-button">
            <input type="radio" id={ slug } name={ group 
             } value={slug} checked={slug === isChecked} readOnly/>
            <label htmlFor={ slug }>{ name }</label>
        </div>
    )
}

export default RadioButton;