
function NoteList({notes}) {
    

  return (
    <div className="note-container">
      <div className="note-list">
        {
            notes.map((note) => (
               <NoteItem key={note.id} note={note}/>
            ))
        }
      </div>
    </div>
  )
}

export default NoteList


function NoteItem({note}) {

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      
 return(
    <div className="note-item">
        <div className="note-item__header">
            <p className="title">{note.title}</p>
            <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
            <button>Delete</button>
            <input type="checkbox" name="" id=""/>
        </div>
        <div className="note-item__footer">
            {new Date(note.createAt).toLocaleString("en-Us", options)}
        </div>
    </div>
 )
}