const mongoose = require("mongoose")
module.exports = mongoose.model('User', {
    name: { type: String },
    email: { type: String },
    password: { type: String }
})