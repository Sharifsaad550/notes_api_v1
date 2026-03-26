import AuthService from "./auth_service.js"
import catchAsync from "../utils/catchAsync.js"

class AuthController{
    signUp = catchAsync(async(req, res, next)=>{
        const result = await AuthService.registerUser(req.body)
        res.status(201).json({
            status:"success",
            data: result
        })
    })

    loginUser = catchAsync(async(req, res, next)=>{
        const {email, password} = req.body
        const result = await AuthService.loginUser(email, password)
        res.status(201).json({
            status:"success",
            token: result
        })
    })    
}

export default new AuthController