const mongoose = require("mongoose")

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    data: {
        type: Array,
        required: true
    },
    description: {
        type: String,
    }
})

module.exports = mongoose.model("article", articleSchema)