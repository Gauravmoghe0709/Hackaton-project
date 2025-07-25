const mongoose = require("mongoose")


function connecttodb(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connect to database...")
    }).catch((error)=>{
        console.log(error)
    })

}

module.exports = connecttodb;