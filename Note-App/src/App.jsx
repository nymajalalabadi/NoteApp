import { useState } from "react";
import "./App.css";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
import NoteStatus from "./component/NoteStatus";

function App() {
  const [notes, setNotes] = useState([]);

  const handleNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeletNote = (id) => {
    //setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));

    // const filterNotes = notes.filter(n => n.id !== id);
    // setNotes(filterNotes);

    setNotes((prevNotes) => prevNotes.filter(n => n.id !== id))
  };

  const handleCompleteNote = (e) => {

    const noteId = Number(e.target.value)

    // const newNotes = notes.map((note) => {
    //   if(note.id === noteId) 
    //   {
    //     return {...note, completed: !note.completed}
    //   }
    //   return note;
    // })

    // const newNotes = notes.map((note) => note.id === noteId ? {...note, completed: !note.completed} : note);
    // setNotes(newNotes);

    setNotes((prevNotes) => prevNotes.map((note) => note.id == noteId ? {...note, completed: ! note.completed} : note));
  };

  return (
  <div className="container">
    <div className="note-header">note header</div>
    <div className="note-app">
      <AddNewNote onAddNote={handleNotes}/>
      <div className="note-container">
        <NoteStatus notes={notes}/>
        <NoteList notes={notes} onDeletNote={handleDeletNote} onCompleteNote={handleCompleteNote}/>
      </div>
    </div>
  </div>);
}

export default App;