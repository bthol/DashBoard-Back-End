const express = require("express");
const app = express();

const mongoose = require(`mongoose`);

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get(`/user/login`, (req, res) => {
    const ID = req;
    res.send(`login page route accessed by ${ID}`)
})

app.get(`/create-account`, (req, res) => {
    const ID = req;
    res.send(`create-account route accessed by ${ID}`)
})

module.export = app.listen(3000, () => {
    console.log("routes are online")
});
