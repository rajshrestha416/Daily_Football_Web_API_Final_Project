const mongooes = require("mongoose")
const Schema = mongooes.Schema

var userSchema = new Schema({
    firstname : String,
    lastname : String,
    gender : String,
    country: String,
    email: String,
    username: {type:String, required:true},
    password: {type:String, required:true, minlength:8},
    fav_club: {type:String, required:true}
})

const User = mongooes.model("User", userSchema)

module.exports = User
