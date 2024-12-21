// document we use for typescript(TS)
import mongoose, {Schema , Document} from "mongoose";



// Since we are using TypeScript, we have to define the type 
// so we use interface 

export interface Message extends Document{
    content: string
    createdAt: Date

}

// creating MessageSchema 
const messageSchema: Schema<Message> = new Schema({
    // fields

    content:{
        type: String,
        required: true
    },

    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
})


export interface User extends Document{
    username: string,
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: boolean,
    isAcceptingMessage: boolean,
    messages: Message[]



}

// creating UserSchema

const userSchema: Schema<User> = new Schema({
    
    username:{
        type: String,
        required: [true,"Username is required"],
        trim: true,
        unique: true
    },

    email:{
        type: String,
        required: [true,"Email is required"],
        unique: true,
        match: [/.+\@.+\..+/,"Enter a valid email"]
    },

    password:{
        type: String,
        required: [true,"Password is required"]
    },

    verifyCode:{
        type: String,
        required: [true,"Verify code is required"]

    },

    verifyCodeExpiry:{
        type: Date,
        required: [true,"Verify code expiry is required"]

    },

    isVerified:{
        type: Boolean,
        default: false
    },

    isAcceptingMessage:{
        type: Boolean,
        default: true
    },

    messages: [messageSchema]
})


// Model for User

const userModel = (mongoose.models.User as mongoose.Model<User>) ||
                   mongoose.model<User>("User",userSchema)

export default userModel