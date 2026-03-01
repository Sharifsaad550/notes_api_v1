import express from "express"
import notesRouter from "./routes/notes_routes.js"
import connectDB from "./db/connect.js"

const app = express()

const port = 2000

app.use(express.json())
app.use("/api/notes", notesRouter)

app.listen(port, async()=>{
    await connectDB()
    console.log(`server running at http://localhost:${port}`)
})