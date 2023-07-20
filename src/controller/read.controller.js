const Subscription = require("../models/subscr.model")


const read  = async (req, res) => {
    const currentDate = new Date()
    console.log(currentDate.getTime());
    const read = await Subscription.updateMany({
        expiration: {
            $lt: currentDate.getTime()
        },
        isActive: true
    },
    {
        $set: {
            isActive: false
        }
    }
    )

    const storageChanels = await Subscription.find({})
    const response = storageChanels.map((chanel) => ({chanelName: chanel.chanelName, isSubscribed: chanel.isActive ? "You are subscribed" : "You are not subscribed"}))

    res.status(200).json({message: "success", data: response})

}

module.exports = {read}