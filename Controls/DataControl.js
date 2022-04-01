//start line

//Dependencies
const express = require("express");
const router = express();
const mongoose = require("mongoose");

//Configuration
require("dotenv").config();

//Database (MongoDB Atlas)
const URI = process.env.MONGO_URI
mongoose.connect(URI)

//Modules
const DataModelDay = require("../Models/DataModelDay")

//Middleware
router.use(express.json())
router.use(express.urlencoded({extended: true}))


//Data Index
router.get(`/`, (req, res) => {
    const ID = req;
    res.send(`data index is active`)
})

//CRUD Operations
//Create route
router.post(`/`, (req, res) => {
    const ID = req;
    res.send(`Create route accessed`)
    redirect(`/user`)
})

//Read route
router.get(`/:id`, (req, res) => {
    const ID = req;
    res.send(`Read route accessed`)
})

//Update route
router.put(`/:id/edit`, (req, res) => {
    const ID = req;
    res.send(`Update route accessed`)
    redirect(`/user`)
})

//Delete route
router.delete(`/:id`, (req, res) => {
    const ID = req;
    res.send(`Delete route accessed`)
    redirect(`/user`)
})

module.exports = router

//end line