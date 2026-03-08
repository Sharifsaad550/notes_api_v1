import jwt from "jsonwebtoken.js"
import Author from "../models/author.js"
import AppError from "../utils/AppError.js"

class AuthService{
    generateToken = (id) =>{
        return jwt.sign(
            {id},
            process.env.JWT_SECRET,
            {expiresIn:process.env.JWT_EXPIRES}
        )
    }

    registerUser = async(data)=>{
        const existingUser = await Author.findOne({email: data.email})
        if(existingUser) throw new AppError("Email already taken",409)
        const newUser = await Author.create(data)
        newUser.password = undefined
        return newUser
    }

    loginUser = async(email, rawPassword) =>{
        const user = await Author.findOne({email:email}).select("+password")
        if(!user) {
            throw new AppError("Invalid email or password", 401)
        }
        const isValidUser = await user.comparePassword(rawPassword)
        if(!isValidUser) {
            throw new AppError("Invalid email or password", 401)
        }


        const token = this.generateToken(user._id)

        return token
    }
}

export default new AuthService