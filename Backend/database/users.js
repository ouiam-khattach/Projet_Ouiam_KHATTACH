const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: { type: String},
    gender:{ type: String },
    dob: { type: Date , required: true},
    news: { type: Boolean },
    email: { type: String }
    
    
}, {
    timestamps: true,
})

module.exports = mongoose.model("User", UserSchema)