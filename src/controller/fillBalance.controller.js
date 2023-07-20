const User = require("../models/auth.model")
const jwt = require("../utils/jwt")


const fillBalance = async (req, res) => {
    const {money} = req.body
    const {token } = req.cookies

    const {userId} = jwt.verify(token)
    const foundUser = await User.findOne({_id: userId})
    const newBalance = money *1 + foundUser.balance *1

    if(!foundUser) {
        res.status(404).json({message: "this user is not defined"})
    } else {
        await User.findByIdAndUpdate(foundUser.id, {
            $set: {
                balance: newBalance,
            }
        })  
    }

    res.status(201).json({message: "money is added"})
}

module.exports = {
    fillBalance
}