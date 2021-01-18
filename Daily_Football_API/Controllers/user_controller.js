const User = require("../Models/user_model")

exports.show_user = (req,res)=>{
    User.find({}).then((data)=>{
        res.send(data)
    });
};

exports.insert_user = (req,res)=>{
    const data = new User(req.body)
    data.save()
}