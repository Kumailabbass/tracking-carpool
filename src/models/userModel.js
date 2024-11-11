import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    username:{
        type:'String',
        require:[true,"Please provide a username"],
        unique: true,
    },
    email:{
        type:'String',
        require:[true,"Please provide a email"],
        unique: true,
    },
    password:{
        type:'String',
        require:[true,"Please provide a password"],
    },
    isVerified:{
        type:'Boolean',
        default:false
    }
})