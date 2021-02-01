import React from 'react'
import myWorld from './MyWorld';
import Poem from './Poem'

const PoemList = () => {
    return (
       myWorld.map((poem)=> {
        <Poem key={poem.id} />
       } )
    )
}

export default PoemList