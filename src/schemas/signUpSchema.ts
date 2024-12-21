// Zod is a library used for typeScript schema validation
import {z} from "zod";

//  this is for one validation
export const usernameValidation = z
    .string()
    .min(2,"Username must have atleast 2 characters")
    .max(20,"Username has no more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special characters")


// now we have to validate signUp schema so we use object for this

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(8,{message: "Password must have atleast 8 characters"})
})