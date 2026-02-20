import express from "express"
import notesRouter from "./routes/notes_routes.js"

const app = express()

const port = 2000

app.use("/api/notes", notesRouter)

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})