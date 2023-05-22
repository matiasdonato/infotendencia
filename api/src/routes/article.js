let { Router } = require("express");
let router = Router();
const articleSchema = require("../db/models/article.models");
let cloudinary = require("../storage/cloudinary.js")
let upload = require("../storage/storage")


//POST

// upload.fields([
//     { name: 'image', maxCount: 1 },
//     { name: 'data' }
// ])

router.post("/", upload, async(req, res) => {
    let { title, data, description } = req.body

    const imageFiles = req.files


    let imageUrlArr = []

    for (let i = 0; i < imageFiles.length; i++) {
        let uploadResult = await cloudinary.uploader.upload(imageFiles[i].path, {
                folder: "articles",
            })
            .catch(err => console.log("error", err))
        imageUrlArr.push(uploadResult.url)

    }




    let image = imageUrlArr.shift()

    for (let i = 0; i < data.length; i++) {
        if (data[i].dataType === "image") {
            data[i].data = imageUrlArr.shift()
        }
    }

    const article = articleSchema({ title, data, image, description });
    article.save()
        .then((data) => res.json(data))
        .catch((error) => { console.log(error), res.json({ message: error }) })
})



//GET

router.get("/", async(req, res) => {
    articleSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.get("/lasts", async(req, res) => {
    articleSchema.find({}, { data: 0, __v: 0 }).sort({ _id: -1 }).limit(10)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.get("/:id", async(req, res) => {
    const { id } = req.params
    articleSchema.find({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router