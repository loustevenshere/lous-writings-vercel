import React from 'react';
import PoemWorld from './PoemWorld';
import Poem from './Poem';

const PoemList = () => {
    return (
       PoemWorld.map((poem)=> (
        <Poem key={poem.id} poem={poem} />
        ) )
    )
}

export default PoemList