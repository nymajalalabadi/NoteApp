import { useState } from "react";
import "./App.css";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
import NoteStatus from "./component/NoteStatus";
import NoteHeader from "./component/NoteHeader";

function App() {
  const [notes, setNotes] = useState([]);

  const[sortBy, setSortBy] = useState("latest")

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

  const HandleOnSort = (e) => {
    setSortBy(e.target.value)
  }

  let sortedNotes = notes; 

  if(sortBy === "earliest")
  {
    sortedNotes = [...notes].sort((a,b) => new Date(a.createAt) - new Date(b.createAt));
  }

  if(sortBy === "latest")
  {
    sortedNotes = [...notes].sort((a,b) => new Date(b.createAt) - new Date(a.createAt));
  }

  if(sortBy === "completed")
  {
    sortedNotes = [...notes].sort((a, b) => Number(a.completed) - Number(b.completed));
  }

  return (
  <div className="container">
    <NoteHeader notes={notes} sortBy={sortBy} onSort={HandleOnSort}/>
    <div className="note-app">
      <AddNewNote onAddNote={handleNotes}/>
      <div className="note-container">
        <NoteStatus notes={notes}/>
        <NoteList notes={sortedNotes} onDeletNote={handleDeletNote} onCompleteNote={handleCompleteNote}/>
      </div>
    </div>
  </div>);
}

export default App;