import NoteItem from "./NoteItem"

function NoteList({notes, onDeletNote}) {
    

  return (
    <div className="note-list">
        {
            notes.map((note) => (
               <NoteItem key={note.id} note={note} onDeletNote={onDeletNote}/>
            ))
        }
    </div>
  )
}

export default NoteList