const mongoose = require('mongoose');

// pehle schema banao
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 10   // yahan minLength ki jagah minlength likhna hai
    },
    email: {
        type: String,
        required: true,
        lowercase: true,  // yahan "lowerCase" nahi "lowercase" hota hai
        trim: true
    }
}, { timestamps: true });

// ab schema ko model me register karo
module.exports = mongoose.model("User", userSchema);
