import Note from "../models/note.js";
import AppError from "../utils/AppError.js"

class NoteService{

    fetchAllNotes = async(userId) =>{
        const allNotes = await Note.find({author:userId})
        return allNotes 
    }

    fetchNote = async (noteId,userId) =>{
     
        const note = await Note.findById(noteId)

        //const note = await Note.findOne({_id:noteId, author:userId})       

        if(note.author.toString() !== userId.toString()){
            throw new AppError("Note does not exist.", 404)
        }

        if(note.author !== userId){
            throw new AppError("You have no permission to this note", 403)
        }

        // if (!note) {
        //     throw new AppError("Note not found", 404);
        // }

        // if (note.author.toString() !== userId.toString()) {
        //     throw new AppError("You have no permission to this note", 403);
        // }

            return note
        }

    createNote = async (data, userId) =>{
    
        //spreadOprator
        const createdNote = new Note({...data,author: userId})

        const result = await createdNote.save()

        return result
    }

    deleteNote = async (noteId, userId) =>{

        const note = await Note.findById(noteId)   

        const noteToDelete = await Note.findByIdAndDelete(noteId)

        if(note.author.toString() !== userId.toString()){
            throw new AppError("You have no permission to this note", 403)
        }

        if(!noteToDelete) throw new AppError("Note not found", 404)

        return {
        message: "Note deleted successfully"
        } 
    }

    updateNote = async (noteId, data, userId) =>{
        const note = await Note.findById(noteId)

        if(!note){
            throw new AppError("Note does not exist.", 404)
        }

        if(note.author.toString() !== userId.toString()){
            throw new AppError("You have no permission to this note", 403)
        }
        const updatedNote = await Note.findByIdAndUpdate(
            noteId, 
            { $set: data },
            { returnDocument: 'after', runValidators: true }
        )

        // if(!updatedNote) throw new AppError("Note not found", 404)

        return updatedNote    

    }

}

export default new NoteService
