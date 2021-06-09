import React, { useState } from 'react'
import '../Styling/Poem.css'

const Poem = ({poem}) => {
    const [click, setclick] = useState(false);

    const handleClick = () => {
        setclick(!click)
    }


    return (
        <div>
        <h1 onClick={handleClick}>{poem.title}</h1>
        {click ? 
        <p>{poem.text}</p>
         : null}

        </div>
    )
}

export default Poem