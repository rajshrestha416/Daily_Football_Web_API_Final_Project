const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))




app.listen(port,()=>{
    console.log("Server running at port" + port)
})