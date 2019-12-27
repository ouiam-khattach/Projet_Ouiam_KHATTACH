const mongoose = require("mongoose")
const Schema = mongoose.Schema
const __MODEL__Schema = new Schema({
    example1: { type: String },
    example2: { type: Boolean, required: true },
    example3: { type: Number, required: true },
    example3: { type: Date, required: true }
}, {
    timestamps: true,
})
module.exports = mongoose.model("__MODEL__", __MODEL__Schema)

