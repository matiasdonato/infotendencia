const mongoose = require("mongoose")
require("dotenv").config()

// const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`

const MONGODB_URI = `mongodb://localhost:27017`

mongoose.connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((db) => console.log("Database is connected"))
    .catch((err) => console.log(err))