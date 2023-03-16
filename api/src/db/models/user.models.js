const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dogs: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model("users", userSchema)