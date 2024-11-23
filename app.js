require("dotenv").config();
const express = require("express");
const app = new express();
const PORT = 8000;
const homeRoute = require("./Routes/home");
const userRoute = require("./Routes/user");
const taskRoute = require("./Routes/task");
const connection = require("./util/db");

app.use(express.json());
app.use("/", homeRoute);
app.use("/user", userRoute);
app.use("/task", taskRoute);

connection().then(() => {
    app.listen(PORT, () => {
        console.log(`connected at http://localhost:${PORT}`);
    })  
})