import React, { useState } from 'react'
import '../Styling/Poem.css'

const Poem = ({poem}) => {
    const [click, setclick] = useState(false);

    const handleClick = () => {
        setclick(!click)
    }


    return (
        <div className="poem_container">
        <h1 className="poem_titles" onClick={handleClick}>{poem.title}</h1>
        {click ? <p className="poem_text">{poem.text}</p> : null}

        </div>
    )
}

export default Poem