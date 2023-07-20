const Subscription = require("../models/subscr.model")

const isActive = async (req, res, next) => {
    try {
    const foundChanel = await Chanels.find({chanelName})
    const startDate =  await Subscription.find({ startDate})
    const expiration =  await Subscription.find({expiration})
        console.log(12);
      if(expiration < startDate) {

      }
        next();
    } catch (error) {
        res.status(401).json({message: "Invalid token"});
    }
};


module.exports = {
    isActive,
}