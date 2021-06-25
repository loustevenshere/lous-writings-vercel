import React, { useState } from 'react';
import '../../Styling/Dream.css'

const Dream = ({dream}) => {
    const [click, setclick] = useState(false);

    const handleClick = () => {
        setclick(!click)
    }

    return (
        <div>
            <h2 className="dream_title" onClick={handleClick}>{dream.title}</h2>
            {click ? <p>{dream.text}</p> : null}
        </div>
    )
}

export default Dream