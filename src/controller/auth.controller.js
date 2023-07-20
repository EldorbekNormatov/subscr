const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt")
const User = require("../models/auth.model")

const register = async (req, res) => {
    const {username, password} = req.body;
    const hashedPass = await  bcrypt.hash(password, 10)
    const find = await User.findOne({username: username})

    
   if(find) {
    res.status(403).json({message: "username is already token", register})
   } else {
        const register = await User.create({username, hashedPass})
        res.status(201).json({message: "success", register})
    }
};

const login = async (req, res) => {   

const {username, password} = req.body

    const find = await User.findOne({username: username })
    console.log(find);
    if(!find) {
        res.status(403).json({message: "password or username is not find"})

    }
    const checkPass = await bcrypt.compare(password, find.hashedPass )
    if(!checkPass) {
        res.status(403).json({message: "password or username is not find"})
      
    }

    const token = jwt.sign( { userId: find.id } )
    res.cookie("token", token);

    res.status(200).json({message: "success logged in"})
}

module.exports = {
    register,
    login,
}