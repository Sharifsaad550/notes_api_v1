import express from "express"
import NotesController from "../controllers/notes_controller.js"

const notesRouter = express.Router()

notesRouter.route("/")
    .get(NotesController.getAllNotes)
    .post(NotesController.createNewNote)

notesRouter.route("/:note_id")
    .put(NotesController.updateOldNote)
    .delete(NotesController.deleteOldNote)
    .get(NotesController.getNote)

export default notesRouter