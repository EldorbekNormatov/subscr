const {Schema, model} = require("mongoose")

const schema = new Schema({
    username: { type: String, required: true, unique: true, },
    hashedPass: { type: String, required: true, },
    balance: {type: Number, default: 0}
    // created_at: { type: Date, default: new Date(), }
}, {
     timestamps: true 
}
);


module.exports = model("User", schema)

