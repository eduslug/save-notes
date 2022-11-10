
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CratArea from "./CreatArea";
import Note from "./Note";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNotes) {
        setNotes((preveNotes) => {
            return [...preveNotes, newNotes]
        });
    }
    function deleteNote(id) {
         setNotes((preveNotes) => {
           return preveNotes.filter((noteItem, index) => {
                return index !== id 
                
            })
        })
    }
    return (
        <div>
            <Header />
            <CratArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index }
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                )
            })}
            <Footer />
        </div>
    )

}

export default App;