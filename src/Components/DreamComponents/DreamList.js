import React from 'react';
import DreamWorld from './DreamWorld';
import Dream from './Dream';

const DreamList = () => {
    return (
        DreamWorld.map((dream) => (
            <Dream key={dream.id} dream={dream} />
        ))
    )
}

export default DreamList