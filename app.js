const express = require("express");
const app = express();

//Dendencies
const mongoose = require(`mongoose`);
const session = require('express-session')

//module imports
const UserModel = require(`./Models/UserModel`)

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('trust proxy', 1)
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


//landing Route
app.get(`/`, (req, res) => {
    const ID = req;
    res.send("index is active")
    if (UserModel.log.in = true) {
        res.redirect(`/user`)
    } else {
        res.redirect(`/user/login`)
    }
})

app.listen(3000, () => {
    console.log("express is online")
});