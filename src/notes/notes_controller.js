import NoteService from "../notes/notes_service.js"
import catchAsync from "../utils/catchAsync.js"

class NotesController{

    getAllNotes = catchAsync(async (req, res ,next) =>{
        const data = await NoteService.fetchAllNotes()

        res.status(200).json({
            status:"success",
            data: data
        })
    })

    getNote = catchAsync(async(req, res, next) =>{
        const noteId = req.params.note_id
        const data = await NoteService.fetchNote(noteId)

        res.status(200).json({
            status:"success",
            data:data
        })
    })

    createNewNote = catchAsync(async(req, res, next) =>{
        const requestBody = req.body
        const data =await NoteService.createNote(requestBody)
        
        res.status(201).json({
            status: "success",
            data:data
        })
    })

    updateOldNote = catchAsync(async(req, res, next)=>{
        const noteId = req.params.note_id
        const updatedData = req.body
        const data =await NoteService.updateNote(noteId, updatedData)

        res.status(200).json({
            status: "success",
            data:data
        })
    })

    deleteOldNote = catchAsync(async(req, res, next) =>{
        const noteId = req.params.note_id
        const data =await NoteService.deleteNote(noteId)

        res.status(204).json({
            status:"deleted",
            data:data
        })
    })

}

export default new NotesController