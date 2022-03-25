const express = require("express");
const app = express();

const mongoose = require(`mongoose`);

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get(`/`, (req, res) => {
    res.send("index is active")
})

module.export = app.listen(3000, () => {
    console.log("express is online")
});