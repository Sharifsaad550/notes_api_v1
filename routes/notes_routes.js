import express from "express"
import { getAllNotes,getNote,createNewNote,deleteOldNote,updateOldNote } from "../controllers/notes_controller.js"

const notesRouter = express.Router()

notesRouter.route("/")
    .get(getAllNotes)
    .post(createNewNote)

notesRouter.route("/:note_id")
    .put(updateOldNote)
    .delete(deleteOldNote)
    .get(getNote)

export default notesRouter