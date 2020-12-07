import React, {useEffect, useState} from "react";
import Sheet from "./components/Sheet";
import notes from './notes';
import Mousetrap from 'mousetrap';
import NotificationArea from "./components/NotificationArea";
import Introduction from "./components/Introduction";

const getRandomNote = () => {
    const randomI = Math.floor(Math.random() * Math.floor(notes.length));
    return notes[randomI];
}

function App() {
    const [currentNote, setCurrentNote] = useState(getRandomNote());
    const [msg, setMsg] = useState(null);

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
        if (currentNote.keyCode === event.key) {
            setMsg({correct: true, note: currentNote.name});
            unbindKeys();
            setTimeout(reset ,1000);
        } else {
            setMsg({correct: false, note: event.key});
        }
    }

    useEffect(() => {
        bindKeys();
        return unbindKeys;
    },[currentNote]);

    return (
        <div className="App">
            <header className="App-header">
                Notey
            </header>
            <Introduction />
            <Sheet note={currentNote}/>
            <NotificationArea msg={msg} />
        </div>
    );

}

export default App;
