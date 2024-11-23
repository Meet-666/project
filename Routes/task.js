const express = require("express");
const Route = new express.Router();
const task = require("../Controller/task");
const {
  setTaskStatusValidationRules,
  validate,
} = require("../middlewares/validation");

// user can add task
Route.post("/", setTaskStatusValidationRules, validate, task.createTask);
// user can get all task
Route.get("/", task.getAllTask);
// user can change detail
Route.put("/:email", setTaskStatusValidationRules, validate, task.updateTaskStatus);
// user can delete task
Route.delete("/:email", task.deleteTask)

module.exports = Route;