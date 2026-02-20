import { fetchAllNotes, fetchNote, createNote, deleteNote, updateNote } from "../service/notes_service.js"

export const getAllNotes = (request, response) =>{
    try {
        const data = fetchAllNotes()
        return response.status(200).json({
            status:"success",
            data: data
        })
    } catch (error) {
        return response.status(500).json({
            status:"fail",
            message:error.message
        })
    }

}

export const getNote = (request,response) => {
    try {
        const noteId = request.params.note_id
        const data = fetchNote(noteId)
        return response.status.json({
            status:"success",
            data:data
        })
    } catch (error) {
        return response.status(200).json({
            status: "fail",
            message:message.error||"Failed to fetch"
        })
    }

}

export const createNewNote = (request,response) => {
    try {
        const noteId = request.params.note_id
        const requestBody = request.Body
        
        const data = createNote(noteId, requestBody)
        return response.status(201).json({
            status: "success",
            data:data
        })
    } catch (error) {
        return response.status(500).json({
            status:"fail",
            message:message.error
        })
    }
    
}

export const updateOldNote = (request,response) => {
    try {
        const noteId = request.params.note_id
        const data = updateNote(noteId)

        return response.status(201).json({
            status: "success",
            data:data
        })

    } catch (error) {
        return response.status(500).json({
            status: "fail",
            message:message.error
        })
    }
    
}

export const deleteOldNote = (request,response) => {
    try {
        const noteId = request.params.note_id
        const data = deleteNote(noteId)

        return response.status(204).json({
            status:"deleted"
            ,data:data
        })
    } catch (error) {
        return response.status(500).json({
            status: "fail",
            message: message.error
        })
    }
    
}