import validate from "../middlewares/validateMiddleWare.js";
import AuthController from "./auth_controllers.js";
import express from "express"
import { loginSchema, signupSchema } from "../validators/authValidatoro.js";

const authRouter = express.Router()

authRouter.post('/signup', validate(signupSchema), AuthController.signUp)
authRouter.post('/login', validate(loginSchema), AuthController.loginUser)

export default authRouter