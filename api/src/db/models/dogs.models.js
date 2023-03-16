const mongoose = require("mongoose")

const dogSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("dogs", dogSchema)