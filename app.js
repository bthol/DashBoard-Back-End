const express = require("express");
const app = express();

const mongoose = require(`mongoose`);
const session = require('express-session')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
}))

//landing index
app.get(`/`, (req, res) => {
    const ID = req;
    res.send("index is active")
})

module.exports = (req, res, next)=>{
    if(req.session.isLoggedIn){
        next()
    }else{
        res.redirect("/users/login")
    }
}

app.listen(3000, () => {
    console.log("express is online")
});