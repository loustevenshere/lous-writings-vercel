import React from 'react';
import NoteWorld from './NoteWorld';
import Note from './Note';

const NoteList = () => {
    return (
        NoteWorld.map((note) => (
            <Note key={note.id} note={note} />
        ))
    )
}

export default NoteList