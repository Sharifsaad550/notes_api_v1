import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDB = async()=>{
    try {
        console.log("connecting to mongo db...")
        await mongoose.connect(process.env.DB_URI)
        console.log("connected to mong db successfully")
    } catch (error) {
        console.log(`Failed to connect to DB: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB