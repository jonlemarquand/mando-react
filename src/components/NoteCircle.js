import React from 'react';

const NoteCircle = ({ noteName, extraClass }) => {
    return (
        <div className={`note-circle ${extraClass}`}>
            {noteName}
        </div>
    )
}

export default NoteCircle;