const User = require("../Models/user_model")

exports.show_user = (req,res)=>{
    User.find({}).then((data)=>{
        res.send(data)
    });
};

exports.inssert_user = (req,res)=>{
    const data = req.body
    data.save()
}