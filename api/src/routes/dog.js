let { Router } = require("express");
let router = Router();
const userSchema = require("../db/models/user.models");
const dogSchema = require("../db/models/dogs.models")


//POST

router.post("/", (req, res) => {
    //@ts-ignore
    const dog = dogSchema(req.body);
    dog.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


//GET

router.get("/", async(req, res) => {
    dogSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//DELETE

router.delete("/:id", async(req, res) => {
    const { id } = req.params
    dogSchema.remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router