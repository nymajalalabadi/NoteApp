import { useState } from "react";
import "./App.css";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const handleNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return <div className="container">
    <div className="note-header">note header</div>
    <div className="note-app">
      <AddNewNote onAddNote={handleNotes}/>
      <NoteList notes={notes}/>
    </div>
  </div>;
}

export default App;