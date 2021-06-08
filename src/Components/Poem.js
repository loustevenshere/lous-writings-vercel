import React from 'react'
import '../Styling/Poem.css'

const Poem = ({poem}) => {
    return (
        <div>
        <h1>{poem.title}</h1>
        <p>{poem.text}</p>
        </div>
    )
}

export default Poem