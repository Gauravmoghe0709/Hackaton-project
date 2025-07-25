const express  = require ("express")
const productroute = require ("../src/Routes/Product.route")
const cors = require("cors")
const Looksroute = require("../src/Routes/Looks.route")



const app = express()
app.use(express.json())
app.use(cors())   // cors is a middleware is use to connection between frontend and backend 


app.use("/",productroute)
app.use("/",Looksroute)



module.exports = app;



