import express from "express"
import notesRouter from "./src/notes/notes_routes.js"
import connectDB from "./src/db/connect.js"
import globalErrorHandler from "./src/middlewares/ErrorMiddleWare.js"

const app = express()

const port = 2000

app.use(express.json())
app.use("/api/notes", notesRouter)

app.use(globalErrorHandler)

app.listen(port, async()=>{
    await connectDB()
    console.log(`server running at http://localhost:${port}`)
})