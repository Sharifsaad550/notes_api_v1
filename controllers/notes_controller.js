import NoteService from "../service/notes_service.js"

class NotesController{

    getAllNotes = async (request, response) =>{
        try {
            const data = await NoteService.fetchAllNotes()
            return response.status(200).json({
                status:"success",
                data: data
            })
        } catch (error) {
            return response.status(500).json({
                status:"fail",
                message:error.message||"There is a problem"
            })
        }

    }

    getNote = async (request,response) => {
        try {
            const noteId = request.params.note_id
            const data = await NoteService.fetchNote(noteId)

            //console.log(`note data:${data}`)
            return response.status(200).json({
                status:"success",
                data:data
            })
        } catch (error) {
            return response.status(500).json({
                status: "fail",
                message:error.message||"Failed to fetch"
            })
        }

    }

    createNewNote =async (request,response) => {
        try {
           // const noteId = request.params.note_id
            const requestBody = request.body
            
            const data =await NoteService.createNote(requestBody)
            return response.status(201).json({
                status: "success",
                data:data
            })
        } catch (error) {
            return response.status(500).json({
                status:"fail",
                message:error.message||"There is a problem"
            })
        }
        
    }

    // updateOldNote = async (request, response) => {
    //     try {
    //         const noteId = request.params.note_id
    //         const updateData = request.body   // 👈 get update data from client

    //         const data = await NoteService.updateNote(noteId, updateData)

    //         return response.status(200).json({
    //             status: "success",
    //             data: data
    //         })

    //     } catch (error) {
    //         return response.status(500).json({
    //             status: "fail",
    //             message: error.message || "There is a problem"
    //         })
    //     }
    // }


    updateOldNote =async (request,response) => {
        try {
            const noteId = request.params.note_id
            const updatedData = request.body

            const data =await NoteService.updateNote(noteId, updatedData)

            return response.status(200).json({
                status: "success",
                data:data
            })

        } catch (error) {
            return response.status(500).json({
                status: "fail",
                message:error.message||"There is a problem"
            })
        }
        
    }

    deleteOldNote =async (request,response) => {
        try {
            const noteId = request.params.note_id
            const data =await NoteService.deleteNote(noteId)

            return response.status(204).json({
                status:"deleted"
                ,data:data
            })
        } catch (error) {
            return response.status(500).json({
                status: "fail",
                message: error.message||"There is a problem"
            })
        }
        
    }

}

export default new NotesController