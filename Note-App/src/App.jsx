import { useState } from "react";
import "./App.css";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
import NoteStatus from "./component/NoteStatus";
import NoteHeader from "./component/NoteHeader";
import { NotesProvider } from "./context/NotesContext";

function App() {
  // const [notes, setNotes] = useState([]);

  const [sortBy, setSortBy] = useState("latest")

  // const handleNotes = (newNote) => {
  //   // setNotes((prevNotes) => [...prevNotes, newNote]);
  //   dispatch({type: "ADD", payload: newNote})
  // };

  // const handleDeletNote = (id) => {
  //   //setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));

  //   // const filterNotes = notes.filter(n => n.id !== id);
  //   // setNotes(filterNotes);

  //   // setNotes((prevNotes) => prevNotes.filter(n => n.id !== id))

  //   dispatch({type: "REMOVE", pauload: id})
  // };

  // const handleCompleteNote = (e) => {
  //   const noteId = Number(e.target.value)

  //   // const newNotes = notes.map((note) => {
  //   //   if(note.id === noteId) 
  //   //   {
  //   //     return {...note, completed: !note.completed}
  //   //   }
  //   //   return note;
  //   // })

  //   // const newNotes = notes.map((note) => note.id === noteId ? {...note, completed: !note.completed} : note);
  //   // setNotes(newNotes);

  //   // setNotes((prevNotes) => prevNotes.map((note) => note.id == noteId ? {...note, completed: ! note.completed} : note));

  // dispatch({type: "COMPLETE", payload: noteId})
  // };

  return (
  <NotesProvider>
    <div className="container">
    <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
    <div className="note-app">
      <AddNewNote/>
      <div className="note-container">
        <NoteStatus />
        <NoteList sortBy={sortBy}/>
      </div>
    </div>
  </div>
  </NotesProvider>
  );
}

export default App;