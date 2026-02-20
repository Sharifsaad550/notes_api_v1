import notes from "../db/notes_db.js";

export const fetchAllNotes = () =>{
    return notes
}

export const fetchNote = (noteId) =>{
    if(!noteId){
        throw new Error("Note id is required.")
    }

    const parsedId = Number(noteId)

    if(Number.isNaN(parsedId)){
        throw new Error("Invalid note Id");
    }

    const requiredNote = notes.find(requiredNote = requiredNote.id === parsedId)

    if(!requiredNote){
        throw new Error("Note does not exist.")
    }

    return requiredNote
}

export const createNote = (data) =>{

    if(!data && typeof data !== "object"){
        throw new Error("Request Body is missing")
    }

    const {title, content, author} = data

    if(!title && typeof title !== "string"){
        throw new Error("Title is a strong requirement and should be of type string")
    }

    if(!content && typeof content !== "string"){
        throw new Error("content is a strong requirement and should be of thype string")
    }

    if(!author && typeof author !== "string"){
        throw new Error("Autor is a strong requirement and it shoul be of type string")
    }

    const createdNote = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        author: author.trim()
    }

    const updatedNote = notes.push(createdNote)

    return updatedNote

}

export const deleteNote = (noteId) =>{

    if(!noteId){
        throw new Error("note id is a strong requirement of a note you may want to delete")
    }

    const parsedId = Number(noteId)
    
    if(Number.isNaN(parsedId)){
        throw new Error("Invalid Id")
    }

    const noteIndex = notes.findIndex(requiredNote => requiredNote.id === parsedId)
//why are we restricting it to -1
    if(noteIndex === -1){
        throw new Error("note not found")
    }

    const newNotes = notes.pop(notes[noteIndex])

    return newNotes
    
}

export const updateNote = (noteId, data) =>{

    if(!noteId){
        throw new Error("Note id is a required field")
    }

    const parsedId = Number(noteId)

    const noteIndex = notes.findIndex(requiredNote => requiredNote.id === parsedId)

    if(noteIndex === -1){
        throw new Error("note not found")
    }

    const {title, content} = data

    const existingTitle = notes.find(noteId).title
    const existingContent = notes.find(noteId).content

    existingTitle = title
    existingContent = content

    const updatedNote = {
        id: Date.now(),
        title:existingTitle.trim(),
        content: existingContent.trim(),
        author: author.trim()
    }

    return notes
}
