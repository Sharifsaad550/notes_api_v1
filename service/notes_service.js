import Note from "../models/note.js"

class NoteService{

    fetchAllNotes = async() =>{
        const allNotes = await Note.find()
        return allNotes 
    }

    fetchNote = async (noteId) =>{
        if(!noteId){
            throw new Error("Note id is required.")
        }
    
        const note = await Note.findById(noteId)

        if(!note){
            throw new Error("Note does not exist.")
        }

        return note
    }

    createNote = async (data) =>{

        if(!data || typeof data !== "object"){
            throw new Error("Request Body is missing")
        }

        const {title, content, author,category, tags, isFavorite, isPinned} = data

        if(!title ||!author){
            throw new Error("missing dome fields")
        }

        const createdNote = new Note({
            title: title.trim(),
            content: content ? content.trim() : "",
            author: author.trim(),
            category: category,
            tags: tags
        })

        const result = await createdNote.save()

        return result
    }

    deleteNote = async (noteId) =>{

        if(!noteId){
            throw new Error("note id is a strong requirement of a note you may want to delete")
        }

        const noteToDelete = await Note.findByIdAndDelete(noteId)

        if(!noteToDelete) throw new Error("Note not found")

        return {
        message: "Note deleted successfully"
        } 
    }

    updateNote = async (noteId, data) =>{

        if(!noteId){
            throw new Error("Note id is a required field")
        }

        if(!data || typeof data !== "object"){
            throw new Error("update data is required")
        }

        const updatedNote = await Note.findByIdAndUpdate(
            noteId, 
            { $set: data },
            { new: true, runValidators: true }
        )

        if(!updatedNote) throw new Error("Note not found")

        return updatedNote    
    }

}

export default new NoteService
