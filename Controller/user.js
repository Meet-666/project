const userSchema = require("../Model/User");

const user = async (req, res) => {
    try {
        const newUser = new userSchema({
            username: req.body.username,
            email: req.body.email,
            role: req.body.role
        })
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    user
}