const jwt = require("../utils/jwt")
const Subscription = require("../models/subscr.model")
const User = require("../models/auth.model")
const Chanels = require("../models/chanels.model")


const subscribe = async (req, res) => {
    const {chanelName, subscription} = req.body;
    const {token}  = req.cookies
    const {userId} = jwt.verify(token)

    const foundUser = await User.findOne({_id: userId})
    const foundChanel = await Chanels.findOne({chanelName: chanelName})
    const subscribedChanel = await  Subscription.findOne({chanelName: chanelName})

    const startDate = new Date()    
    const expiration = new Date()
    expiration.setMonth(expiration.getMonth() + subscription * 1 ) ;

    const subscribePrice =  subscription * 10000;

    if(!foundChanel ) {
        res.status(400).json({message: "this chanel is not found"})
    }  else if(foundChanel.ownerId === userId  ) {
        res.status(400).json({message: "this is your own chanel"})
    } else  if( subscribedChanel ) {
        res.status(400).json({message: "you are already subscribed to this chanel"})
    } else if(foundUser.balance < subscribePrice) {
        res.status(403).json({message: "You do not have sufficent amoun of money"})
    } else {

     const newBalance =   (foundUser.balance * 1) - (subscribePrice * 1)
        await User.findByIdAndUpdate(foundUser.id, {
            $set: {
                balance: newBalance,
            }
        })          

     const newBalance2 =   foundChanel.balance * 1 + subscribePrice * 1
        
        await Chanels.findByIdAndUpdate(foundChanel.id, {
            $set: {
                balance: newBalance2,
            }
        })          
        
        const subscriber = userId;
        const newChanel =   await Subscription.create({chanelName, startDate: startDate.getTime(), expiration: expiration.getTime(), subscriber })
        res.status(201).json({message: "you are subscribed successfully"})
        
    }
}
 
module.exports = {
    subscribe
}