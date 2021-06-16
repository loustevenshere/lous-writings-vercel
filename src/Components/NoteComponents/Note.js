import React from 'react';

const Note = ({note}) => {
    return (
        <div className="note_container">
            <h1>{note.title}</h1>
            <p>{note.text}</p>
        </div>
    )
}

export default Note