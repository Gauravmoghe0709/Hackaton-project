const mongoose = require("mongoose")



const Looksschema = new mongoose.Schema({
    name:String,
    image:String,
})

const looksmodel = mongoose.model("Looks",Looksschema)

module.exports = looksmodel