const express = require("express");
const route = new express.Router();
const {home} = require("../Controller/home");

route.get("/", home);

module.exports = route;