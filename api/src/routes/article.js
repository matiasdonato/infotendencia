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

    console.log(imageFiles)

    let imageUrlArr = []

    for (let i = 0; i < imageFiles.length; i++) {
        let uploadResult = await cloudinary.uploader.upload(imageFiles[i].path, {
                folder: "articles",
            })
            .catch(err => console.log("error", err))
        imageUrlArr.push(uploadResult.url)

    }



    console.log("imagess", imageUrlArr)

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

// router.post("/", upload, async(req, res) => {
//     let { title, data, description } = req.body

//     const imageFiles = req.files
//     const images = []
//     for (let i = 0; i < imageFiles.length; i++) {
//         images.push(imageFiles[i].originalname)
//     }

//     console.log("images", images)
//     console.log("imagesfiles", imageFiles)
//     console.log("data", data)

//     let imageUrlArr = []
//     await Promise.all([
//             Promise.all(
//                 imageFiles.map(file => {
//                     console.log("file", file)
//                     return new Promise(async(resolve, reject) => {
//                         await cloudinary.uploader.upload(file.path, {
//                             folder: "articles",
//                         }, (err, result) => {
//                             if (err) {
//                                 console.log(err);
//                                 return reject(err);
//                             }
//                             resolve(imageUrlArr.push({ url: result.secure_url, name: file.originalname }));
//                         });
//                     });
//                 })
//             )
//         ])
//         .then(results => console.log("image upload succesfully"))
//         .catch(err => {
//             res.status(500).json({ error: err.message });
//         });

//     console.log("imageUrl", imageUrlArr)
//     for (let i = 0; i < images.length; i++) {
//         for (let j = 0; j < imageFiles.length; j++) {
//             if (images[i] === imageUrlArr[j].name) {
//                 images[i] = imageUrlArr[j].url
//             }
//         }
//     }

//     console.log("asdkopñasdiopsauiopás", images)
//     const image = images.shift()
//     console.log("final images", images)
//     console.log("def img", image)

//     for (let i = 0; i < data.length; i++) {
//         if (data[i].dataType === "image") {
//             data[i].data = images.shift()
//         }
//     }



//     const article = articleSchema({ title, data, image, description });
//     article.save()
//         .then((data) => res.json(data))
//         .catch((error) => { console.log(error), res.json({ message: error }) })
// })


//GET

router.get("/", async(req, res) => {
    articleSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router