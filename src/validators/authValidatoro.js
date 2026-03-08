import {z} from 'zod'

export const signupSchema= z.object({
    username: z.string()
        .max(50, "cant exceed this figure")
        .min(2, "this is too short"),

    email: z.string()
        .email("invalid email format"),

    passwor: z.string()
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