const multer = require("multer")

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './src/storage/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname + '-' + Date.now() + Math.floor(Math.random() * 10000) + ".jpg")
    }
})

var upload = multer({ storage: storage, limits: { fileSize: 3024 * 3024 * 10 } }).array('images[]', 12)

module.exports = upload;