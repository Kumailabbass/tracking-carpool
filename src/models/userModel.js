// import mongoose from "mongoose";

// const userScheme = new mongoose.Schema({
//     username:{
//         type:'String',
//         require:[true,"Please provide a username"],
//         unique: true,
//     },
//     email:{
//         type:'String',
//         require:[true,"Please provide a email"],
//         unique: true,
//     },
//     password:{
//         type:'String',
//         require:[true,"Please provide a password"],
//     },
//     isVerified:{
//         type:'Boolean',
//         default:false
//     }
// })
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String, // Fix: No need for quotes around type
        required: [true, "Please provide a username"], // Fix: 'require' should be 'required'
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    }
});

// Export the model to use it in other files
export default mongoose.model("User", userSchema);
