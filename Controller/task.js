const taskSchema = require("../Model/Task");
const userSchema = require("../Model/User");

const createTask = async (req, res) => {
    try {
        const {
            Email
        } = req.body
        const userExists = await userSchema.findOne({
            email: Email
        });
        if (!userExists) {
            const newTask = new taskSchema({
                taskName: req.body.taskName,
                description: req.body.description,
                email: req.body.email,
                Status: req.body.Status
            })
            await newTask.save();
            res.status(200).json(newTask)
        } else {
            res.send("User Exist");
        }
    } catch (error) {
        throw error
    }
}

const getAllTask = async (req, res) => {
    try {
        const getalltask = await taskSchema.find();
        res.status(200).json(getalltask);
    } catch (error) {
        throw error;
    }
}
const updateTaskStatus = async (req,res) => {
    try {
        const useremail = req.params.email;
        const updateTask = await taskSchema.updateOne( {email:useremail}, {
            $set: req.body
        }, {
            new: true
        })
        res.send(updateTask);
    } catch (error) {
        throw error;
    }
}
const deleteTask = async (req, res) => {
    try {
        const useremail = req.params.email;
        const del = await taskSchema.deleteOne({email:useremail});
        res.send(del);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createTask,
    getAllTask,
    updateTaskStatus,
    deleteTask
};