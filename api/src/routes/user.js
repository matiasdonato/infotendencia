let { Router } = require("express");
let router = Router();
const userSchema = require("../db/models/user.models");
const dogSchema = require("../db/models/dogs.models");
const { model } = require("mongoose");


//POST

router.post("/", (req, res) => {
    //@ts-ignore
    const user = userSchema(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


//GET

router.get("/", async(req, res) => {
    userSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.get("/dogs", async(req, res) => {
    await userSchema.aggregate([{
            $lookup: {
                from: "dogs",
                localField: "name",
                foreignField: "ownerName",
                as: "dogs"
            }
        }])
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


router.get("/:id", async(req, res) => {
    const { id } = req.params
    userSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


//PUT

router.put("/:id", async(req, res) => {
    const { id } = req.params
    const { name, age, email, dogs } = req.body
    userSchema.updateOne({ _id: id }, { $set: { name, age, email, dogs } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


//DELETE

router.delete("/:id", async(req, res) => {
    const { id } = req.params
    userSchema.remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router