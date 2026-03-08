import express from "express"
import notesRouter from "./src/notes/notes_routes.js"
import connectDB from "./src/db/connect.js"
import globalErrorHandler from "./src/middlewares/ErrorMiddleWare.js"
import authRouter from "./src/auth/auth_routers.js"
import dotenv from "dotenv"

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use("/api/notes", notesRouter)
app.use("/api/signup", authRouter)

app.use(globalErrorHandler)

app.listen(port, async()=>{
    await connectDB()
    console.log(`server running at http://localhost:${port}`)
})