import React from 'react'
import MyWorld from './MyWorld';
import Poem from './Poem'

const PoemList = () => {
    return (
       MyWorld.map((poem)=> {
        <Poem key={poem.id} poem={poem} />
       } )
    )
}

export default PoemList