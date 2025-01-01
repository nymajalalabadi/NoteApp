import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);

const NotesDispatchContext = createContext(null);

function notesReducer(state, action)
{
 switch(action.type) {
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

export function NotesProvider({children}) 
{
    const [notes, dispatch] = useReducer(notesReducer, [])

    return (
        <NotesContext.Provider value={notes}>
            <NotesDispatchContext.Provider value={dispatch}>
                {children}
            </NotesDispatchContext.Provider>
        </NotesContext.Provider>
    )
}

export function useNotes() {
    return useContext(NotesContext);
}

export function useNotesDispatch() {
    return useContext(NotesDispatchContext);
}