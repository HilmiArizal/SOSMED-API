const mongoose = require('mongoose');


const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        description:{
            type: String,
            max: 500
        },
        file: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);