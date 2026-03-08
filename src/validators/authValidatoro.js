import {z} from 'zod'

export const signupSchema= z.object({
    username: z.string({
        required_error:"user name is required",
        invalid_type_error:"User name must be a text"
    })
        .max(50, "cant exceed this figure")
        .min(2, "this is too short"),

    email: z.string({
        required_error:"user email is required",
        invalid_type_error:"Email must be a text"
    })
        .email("invalid email format"),

    passwor: z.string({
        required_error:"Password is required",
        invalid_type_error:"Password must be a text"
    })
        .min(8, "must be atleast 8 characters")
        .regex(/[a-zA-Z]/, "password must have atleast a letter")
        .regex(/[0-9]/, "password must have atleatst a number")
})

export const loginSchema = z.object({
    email: z.string()

        .email("Enter email address"),

    password: z.string()
        .min("password is required")
})