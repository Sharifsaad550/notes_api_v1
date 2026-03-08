import mongoose from "mongoose";
import bcrypt  from "bcryptjs";

const authorSchema = new mongoose.Schema({
    username :{
        type: String,
        required: [true, "please tell us your name"]
    },
    email:{
        type:String,
        required:[true,"please provide ypour email"],
        unique: true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true, "please provide the password"],
        minLength: 8,
        select:false
    }
}, {timestamps: true})

authorSchema.pre("save", async function (next) {
    if(!this.isModified('password')) return next()
    const hashPassword = await bcrypt.hash(this.password, 10)
    this.password = hashPassword
    next()
})

authorSchema.methods.comparePassword = async function (hashedPassword, userPassword) {
    return await bcrypt.compare(userPassword, hashedPassword)
}

const Author = mongoose.model("Author", authorSchema)

export default Author