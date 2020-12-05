import React, {useEffect, useState} from "react";
import Sheet from "./components/Sheet";
import notes from './notes';
import Mousetrap from 'mousetrap';
import NotificationArea from "./components/NotificationArea";

const getRandomNote = () => {
    const randomI = Math.floor(Math.random() * Math.floor(notes.length));
    return notes[randomI];
}

function App() {
    const [currentNote, setCurrentNote] = useState(getRandomNote());
    const [msg, setMsg] = useState('');

    const bindKeys = () => Mousetrap.bind(['a','b','c','d','e','f','g'], keyPress);
    const unbindKeys = () => Mousetrap.unbind(['a','b','c','d','e','f','g']);

    const reset = () => {
        let randomNote = getRandomNote();
        while (randomNote.name === currentNote.name) {
            randomNote = getRandomNote();
        }
        setCurrentNote(randomNote);
        setMsg('');
    }

    const keyPress = (event) => {
        console.log(event.key);
        if (currentNote.keyCode === event.key) {
            setMsg('Correct!');
            unbindKeys();
            setTimeout(reset ,1000);
        } else {
            setMsg(`Sorry, it's not ${event.key}`);
        }
    }

    useEffect(() => {
        bindKeys();
        return unbindKeys;
    },[currentNote]);

    if (currentNote) {
        return (
            <div className="App">
                <header className="App-header">
                    Notey
                </header>
                <Sheet note={currentNote}/>
                <NotificationArea msg={msg} />
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }

}

export default App;
