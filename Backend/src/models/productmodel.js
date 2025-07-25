const mongoose = require("mongoose")




const productschema = new mongoose.Schema({
    title:String,
    image:String,
    price:Number,
    catagories:String,
})


const productmodel = mongoose.model("product",productschema)
module.exports = productmodel