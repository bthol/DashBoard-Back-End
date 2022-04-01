//start line

//Dendencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require('body-parser');

//Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

//Controller indices
const DataControl = require("./Controls/DataControl")
app.use(`/data`, DataControl)

//landing Route
app.get(`/`, (req, res) => {
    const ID = req;
    res.send("index is active")
    // res.redirect(`/data`)
    //landing stategy for once user functionality is operational
    // if (UserModel.log.in = true) {
    //     res.redirect(`/user`)
    // } else {
    //     res.redirect(`/user/login`)
    // }
})

module.exports = app.listen(3000, () => {
    console.log("express is online and running")
});

//end line