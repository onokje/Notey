import React, {useEffect, useState} from "react";
import Sheet from "./components/Sheet";
import notes from './notes';
import Mousetrap from 'mousetrap';

const getRandomNote = () => {
    const randomI = Math.floor(Math.random() * Math.floor(notes.length))
    return notes[randomI];
}

function App() {
    const [currentNote, setCurrentNote] = useState(getRandomNote())

    const keyPress = (event) => {
        if (currentNote.keyCode === event.key) {
            console.log('Correct!');
            reset();
        } else {
            console.log('Wrong!');
        }
    }

    const reset = () => {
        setCurrentNote(getRandomNote());
    }

    useEffect(() => {
        Mousetrap.bind(['a','b','c','d','e','f','g'], keyPress)
        return () => Mousetrap.unbind(['a','b','c','d','e','f','g']);
    }, [currentNote]);


    return (
        <div className="App">
            <header className="App-header">
                Notey
            </header>
            <Sheet note={currentNote}/>
        </div>
    );
}

export default App;
