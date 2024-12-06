import NoteItem from "./NoteItem"

function NoteList({notes, onDeletNote, onCompleteNote}) {
    

  return (
    <div className="note-list">
        {
            notes.map((note) => (
               <NoteItem key={note.id} note={note} onDeletNote={onDeletNote} onCompleteNote={onCompleteNote}/>
            ))
        }
    </div>
  )
}

export default NoteList