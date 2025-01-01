import { useNotesDispatch } from "../context/NotesContext";

function NoteItem({note}) {

    const dispatch = useNotesDispatch();

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };

 return(
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
        <div className="note-item__header">
            <div>
                <p className="title">{note.title}</p>
                <p className="desc">{note.description}</p>
            </div>
            <div className="actions">
                <button onClick={() => dispatch({type: "REMOVE", payload: note.id})}>❌</button>
                <input type="checkbox" onChange={(e) => {
                    const noteId = Number(e.target.value);
                    dispatch({type: "COMPLETE", payload: noteId});
                }} name={note.id} id={note.id} value={note.id}/>
            </div>
        </div>
        <div className="note-item__footer">
            {new Date(note.createAt).toLocaleString("en-Us", options)}
        </div>
    </div>
 )
}

export default NoteItem;