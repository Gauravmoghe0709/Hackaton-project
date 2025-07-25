const express = require("express")
const Router = express.Router()
const multer = require("multer")
const uploadfile = require("../Service/Storage.service")
const looksmodel = require("../models/Looksmodel")
const router = require("./Product.route")



const upload = multer({storage:multer.memoryStorage()})


router.post("/lookbook",upload.single("image"),async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const lookbook = await uploadfile(req.file)
    const looksbookdata = await looksmodel.create({
        title:req.body.title,
        image:lookbook.url, 
    })
    res.status(201).json({
        message:"sucessfully....",
        looksbookdata
    })
    
})

router.get("/lookbook",async(req,res)=>{
    const looksbookdata = await looksmodel.find()
    res.status(201).json({
        message:"data featch sucessfully...",
        looksbookdata,
    })
})



module.exports = Router