const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destnation: (req, file, cb)=>{
        cb(null, 'public')
    },
    filename: (req,file,cb)=>{
        const timestamp= new Date().getTime()
        const filename=file.filename
        const extention= path.extname(file.originalname)
        cb(null,`${timestamp}-${filename}-${extention}`)
    }
})

const upload = multer({storage:storage})

module.exports = upload