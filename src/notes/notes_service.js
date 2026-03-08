import Note from "../models/note.js";
import AppError from "../utils/AppError.js"

class NoteService{

    fetchAllNotes = async() =>{
        const allNotes = await Note.find()
        return allNotes 
    }

    fetchNote = async (noteId) =>{
     
        const note = await Note.findById(noteId)

        if(!note){
            throw new AppError("Note does not exist.", 404)
        }

        return note
    }

    createNote = async (data) =>{
    
        //spreadOprator
        const createdNote = new Note({...data})

        const result = await createdNote.save()

        return result
    }

    deleteNote = async (noteId) =>{

        const noteToDelete = await Note.findByIdAndDelete(noteId)

        if(!noteToDelete) throw new AppError("Note not found", 404)

        return {
        message: "Note deleted successfully"
        } 
    }

    updateNote = async (noteId, data) =>{

        const updatedNote = await Note.findByIdAndUpdate(
            noteId, 
            { $set: data },
            { new: true, runValidators: true }
        )

        if(!updatedNote) throw new AppError("Note not found", 404)

        return updatedNote    
    }

}

export default new NoteService
