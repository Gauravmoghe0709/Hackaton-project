const express = require("express")
const router = express.Router()
const multer = require("multer")
const uploadfile = require("../Service/Storage.service")
const productmodel = require("../models/productmodel")


const upload = multer({ storage: multer.memoryStorage() })
// multer is a middelware is used to file uploaded in form data form like a video,audio,image file etc.

router.post("/product", upload.single("image"), async (req, res) => { // upload is a variable and .singel is a  method use to upload a single file at a time
    console.log(req.body)
    console.log(req.file)
    const filedata = await uploadfile(req.file)
    const product = await productmodel.create({
        title: req.body.title,
        price: req.body.price,
        image: filedata.url,
        catagories: req.body.catagories
    })
    res.status(201).json({
        message: "sucessfully....",
        product: product,

    })
})


router.get("/product", async (req, res) => {

    const productdata = await productmodel.find()
    res.status(201).json({
        message: "data Featch Sucessfully...",
        productdata,
     })

})



module.exports = router