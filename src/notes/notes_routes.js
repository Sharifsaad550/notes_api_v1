import express from "express"
import NotesController from "../notes/notes_controller.js"
import validate from "../middlewares/validateMiddleWare.js"
import { createNoteSchema, mongoIdSchema, updateNoteSchema } from "../validators/noteValidator.js"

const notesRouter = express.Router()

notesRouter.route("/")
    .get(NotesController.getAllNotes)
    .post(validate(createNoteSchema), NotesController.createNewNote)

notesRouter.route("/:note_id")
    .put(validate(mongoIdSchema), validate(updateNoteSchema), NotesController.updateOldNote)
    .delete(validate(mongoIdSchema), NotesController.deleteOldNote)
    .get(validate(mongoIdSchema), NotesController.getNote)

export default notesRouter