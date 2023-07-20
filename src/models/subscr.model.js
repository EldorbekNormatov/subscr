const {Schema, model, } = require("mongoose")

const schema = new Schema({
    chanelName: { type: String, required: true, unique: true, },
    startDate: { type: Number, required: true, },
    expiration: { type: Number, required: true, },
    subscriber: {type: String, },
    isActive: {type: Boolean, default: true},
});


module.exports = model("Subscription", schema)
