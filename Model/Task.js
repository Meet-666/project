const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");


const Task = new Schema({
    taskName:{
        type : String,
        require : true
    },
    description:{
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is Invalid");
            }
        }
    },
    Status:{
        type : String,
        default : "TO_DO"
    }
});

const taskSchema = new mongoose.model("task", Task);

module.exports = taskSchema;