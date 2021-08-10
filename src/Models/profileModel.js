const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        imageprofile: {
            type: String
        },
        firstname:{
            type: String,
        },
        lastname:{
            type: String,
        },
        birthdaydate: {
            type: String
        },
        gender: {
            type: String
        },
        job: {
            type: String
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);