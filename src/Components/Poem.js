import React from 'react'

const Poem = ({poem}) => {
    return (
        <>
        <h1>{poem.title}</h1>
        <p>{poem.text}</p>
        </>
    )
}

export default Poem