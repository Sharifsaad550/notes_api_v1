import AuthService from "./auth_service.js"
import catchAsync from "../utils/catchAsync.js"

class AuthController{
    signUp = catchAsync(async(req, resizeBy, next)=>{
        const result = await AuthService.registerUser(req.body)
        resizeBy.status(201).json({
            status:"success",
            data: result
        })
    })

    loginUser = catchAsync(async(req, resizeBy, next)=>{
        const {email, password} = req.body
        const result = await AuthService.loginUser(email, password)
        resizeBy.status(201).json({
            status:"success",
            token: result
        })
    })    
}

export default new AuthController