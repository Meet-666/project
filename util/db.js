const mongoose = require("mongoose");
const URL = process.env.MONGODB_URL

const connection = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Connected!")
    } catch (error) {
        throw error;
    }
}
module.exports = connection;