const express = require("express");
const Route = new express.Router();
const user = require("../Controller/user");

Route.post("/", user.user);

module.exports = Route