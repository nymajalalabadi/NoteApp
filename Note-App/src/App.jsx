import { useState } from "react";
import "./App.css";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const handleNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeletNote = (id) => {
    //setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));

    const filterNotes = notes.filter(n => n.id !== id);
    setNotes(filterNotes);
  };

  return (
  <div className="container">
    <div className="note-header">note header</div>
    <div className="note-app">
      <AddNewNote onAddNote={handleNotes}/>
      <div className="note-container">
        <NoteList notes={notes} onDeletNote={handleDeletNote}/>
      </div>
    </div>
  </div>);
}

export default App;