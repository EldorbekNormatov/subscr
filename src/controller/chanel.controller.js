const Chanels = require("../models/chanels.model")
const jwt = require("../utils/jwt")
const User = require("../models/auth.model")

const createChanel = async (req, res) => {
    try{
        const {chanelName, } = req.body
        const {token } = req.cookies
        const {userId} = jwt.verify(token)
        const foundUser = await User.findOne({_id: userId})
        const foundChanel = await User.findOne({chanelName: chanelName})


        if(!foundUser) {
            res.status(403).json({message: "you are not registered yet please register first"})
        } else if(foundChanel) {
            res.status(403).json({message: "this chanel already exist"})
        } else {            
        const ownerId = userId
        const chanel = await Chanels.create({chanelName, ownerId})
        res.status(201).json({message: "chanel is created",chanel })
        }
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    createChanel,
}
