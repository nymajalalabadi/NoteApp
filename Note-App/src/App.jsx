import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
import NoteStatus from "./component/NoteStatus";
import NoteHeader from "./component/NoteHeader";

function notesReducer(state, action)
{
 switch(action.type){
  case "ADD":{
    return [...state, action.payload];
  }
  case "REMOVE":{
    return state.filter((note) => note.id !== action.payload);
  }
  case "COMPLETE":{
    return state.map((note) => note.id === action.payload ? {...note, completed: !note.completed} : note);
  }
  default:{
    throw new Error("Unknow action" + action.type);
  }
 }
}

function App() {
  // const [notes, setNotes] = useState([]);

  const [notes, dispatch] = useReducer(notesReducer, [])

  const [sortBy, setSortBy] = useState("latest")

  const handleNotes = (newNote) => {
    // setNotes((prevNotes) => [...prevNotes, newNote]);
    dispatch({type: "ADD", payload: newNote})
  };

  const handleDeletNote = (id) => {
    //setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));

    // const filterNotes = notes.filter(n => n.id !== id);
    // setNotes(filterNotes);

    // setNotes((prevNotes) => prevNotes.filter(n => n.id !== id))

    dispatch({type: "REMOVE", pauload: id})
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

    // setNotes((prevNotes) => prevNotes.map((note) => note.id == noteId ? {...note, completed: ! note.completed} : note));

  dispatch({type: "COMPLETE", payload: noteId})
  };

  return (
  <div className="container">
    <NoteHeader notes={notes} sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
    <div className="note-app">
      <AddNewNote onAddNote={handleNotes}/>
      <div className="note-container">
        <NoteStatus notes={notes}/>
        <NoteList notes={notes} sortBy={sortBy} onDeletNote={handleDeletNote} onCompleteNote={handleCompleteNote}/>
      </div>
    </div>
  </div>);
}

export default App;