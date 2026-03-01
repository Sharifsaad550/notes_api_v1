import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: [100, "title can't exceed 100 chatrcters"]
        ,minLength: [3, "title is too short"]
    },
    content: {
        type: String,
        required: false,
        default: ""
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["work", "personal"],
        default: "personal",
    },
    tags: {
        type: [String],
        default:[]
    },
    isFavorite: {
        type: Boolean,
        default: false
    },
    isPinned: {
        type: Boolean,
        default: false
    }
},{timestamps: true})

const Note = mongoose.model('Note', noteSchema)

export default Note