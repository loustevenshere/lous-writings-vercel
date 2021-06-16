import React, { useState } from 'react';

const Dream = ({dream}) => {
    const [click, setclick] = useState(false);

    const handleClick = () => {
        setclick(!click)
    }

    return (
        <div>
            <h1 onClick={handleClick}>{dream.title}</h1>
            {click ? <p>{dream.text}</p> : null}
        </div>
    )
}

export default Dream