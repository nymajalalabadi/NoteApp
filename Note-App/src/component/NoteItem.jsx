
function NoteItem({note, onDeletNote}) {

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };

 return(
    <div className="note-item">
        <div className="note-item__header">
            <div>
                <p className="title">{note.title}</p>
                <p className="desc">{note.description}</p>
            </div>
            <div className="actions">
                <button onClick={() => onDeletNote(note.id)}>❌</button>
                <input type="checkbox" name="" id=""/>
            </div>
        </div>
        <div className="note-item__footer">
            {new Date(note.createAt).toLocaleString("en-Us", options)}
        </div>
    </div>
 )
}

export default NoteItem;