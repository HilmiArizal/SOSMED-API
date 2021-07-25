const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            min: 3,
            max: 20,
            unique: true
        },
        username: {
            type: String,
            required: true,
            min: 3,
            max: 20,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 6
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);