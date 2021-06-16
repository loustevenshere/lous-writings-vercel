import React, { useState } from 'react';

const Note = ({note}) => {
    const [click, setclick] = useState(false);

    const handleClick = () => {
        setclick(!click)
    }

    return (
        <div className="note_container">
            <h1 onClick={handleClick}>{note.title}</h1>
            {click ? <p>{note.text}</p> : null}
        </div>
    )
}

export default Note