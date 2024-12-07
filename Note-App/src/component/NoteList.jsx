import NoteItem from "./NoteItem"

function NoteList({notes, sortBy, onDeletNote, onCompleteNote}) {
    
  let sortedNotes = notes;

  if (sortBy === "earliest")
    sortedNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  ); // a -b  => a > b ? 1 : -1

  if (sortBy === "latest")
    sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  ); // b -a  => a > b ? -1 : 1

  if (sortBy === "completed")
    sortedNotes = [...notes].sort((a, b) => Number(a.completed) - Number(b.completed)
  );

  return (
    <div className="note-list">
        {
            sortedNotes.map((note) => (
               <NoteItem key={note.id} note={note} onDeletNote={onDeletNote} onCompleteNote={onCompleteNote}/>
            ))
        }
    </div>
  )
}

export default NoteList