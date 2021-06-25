import React, { useState } from 'react'
import '../../Styling/Poem.css'

const Poem = ({poem}) => {
    const [click, setclick] = useState(false);

    const handleClick = () => {
        setclick(!click)
    }


    return (
        <div className="poem_container">
        <h2 className="poem_titles" onClick={handleClick}>{poem.title}</h2>
        {click ? <div className="text_container"><p className="poem_text">{poem.text}</p></div> : null}

        </div>
    )
}

export default Poem