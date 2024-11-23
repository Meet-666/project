const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    username:{
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    role:{
        type: String,
        require: true
    }
});

const userSchema = new mongoose.model("user", User);

module.exports = userSchema;