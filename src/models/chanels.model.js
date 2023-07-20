const {Schema, model, } = require("mongoose")

const schema = new Schema({
    chanelName: { type: String, required: true, unique: true, },
    ownerId: { type: String, required: true, },
    subscription: {type: [String], default: ['1', '3', '6'], },
    subscriptionPrice: {type: [String], default: ['1 = 10000 sum', '3 = 30000 sum', '6 = 60000 sum'], },
    balance: {type: Number, default: 0},
});


module.exports = model("Chanels", schema)

// const mongoose = require('mongoose');

// Create a Mongoose schema
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true },
//   age: { type: Number, required: true },
//   hobbies: { type: [String], default: [] }, // Array of strings (hobbies)
//   posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }], // Array of references to another model (Post)
//   friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array of references to the same model (User)
// });

// Create the User model based on the schema
// const User = mongoose.model('User', userSchema);
