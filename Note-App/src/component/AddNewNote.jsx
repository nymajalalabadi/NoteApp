import { useState } from "react";

function AddNewNote({onAddNote}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const handleSubmite = (e) => {
        e.preventDefault();

        if(!title || !description) 
        {
          return null;
        }
        

        const newNote = {
            id: Date.now(),
            title: title,
            description: description,
            completed: false,
            createAt: Date.now().toISOString,
        };

        onAddNote(newNote);

        setTitle("");
        setDescription("");
    };


    const handlerChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handlerChangeDescription = (e) => {
        setDescription(e.target.value);
    }

  return (
    <div className="add-new-note">
      <h2>ADD NEW NOTE</h2>
      <form className="note-form" onSubmit={handleSubmite}>
        <input type="text" onChange={handlerChangeTitle} value={title} className="text-field" placeholder="title..." />
        <input type="text" onChange={handlerChangeDescription} value={description} className="text-field" placeholder="description..." />
        <button type="submit" className="btn btn--primary">add new note</button>
      </form>
    </div>
  )
}

export default AddNewNote
