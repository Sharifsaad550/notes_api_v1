import express from "express"
import NotesController from "../notes/notes_controller.js"
import validate from "../middlewares/validateMiddleWare.js"
import { createNoteSchema, mongoIdSchema, updateNoteSchema } from "../validators/noteValidator.js"

const notesRouter = express.Router()

notesRouter.route("/")
    .get(NotesController.getAllNotes)
    .post(validate(createNoteSchema), NotesController.createNewNote)

notesRouter.route("/:note_id")
    .put(validate(mongoIdSchema, 'params'), validate(updateNoteSchema), NotesController.updateOldNote)
    .get(validate(mongoIdSchema, 'params'), NotesController.getNote)
    .delete(validate(mongoIdSchema, 'params'), NotesController.deleteOldNote)

export default notesRouter