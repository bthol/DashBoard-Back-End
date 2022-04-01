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


//Data Index (shows data structure)
router.get(`/`, async (req, res) => {
    // const ID = req;
    // res.send(`data index is active`)
    try {
        const dataDay = await DataModelDay.find();
        res.send({
            success: true,
            dataDay: dataDay
        })
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        })
    }
})

//CRUD Operations
//Create route (enters data using model format into databse)
router.post(`/`, async (req, res) => {
    // const ID = req;
    // res.send(`Create route accessed`)
    try {
        const entry = await DataModelDay.create(req.body);
        res.send({
            success: true,
            entry: entry
        })
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        })
    }
})

//Read route (shows a datum within the data structure)
router.get(`/:id`, async (req, res) => {
    // const ID = req;
    // res.send(`read route accessed`)
    try {
        const datumDay = await DataModelDay.findById(req.params.id)
        if (!datumDay) {throw new Error("No datum by that ID")}
        res.send({
            success: true,
            datumDay: datumDay
        })
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        })
    }
})

//Update route
router.put(`/:id`, async (req, res) => {
    // const ID = req;
    // res.send(`Update route accessed`)
    try {
        const datumDay = await DataModelDay.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send({
            success: true,
            datumDay: datumDay
        })
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        })
    }
})

//Delete route
router.delete(`/:id`, async (req, res) => {
    // const ID = req;
    // res.send(`Delete route accessed`)
    try {
        const datumDay = await DataModelDay.findByIdAndDelete(req.params.id);
        res.send({
            success: true,
            datumDay: datumDay
        })
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        })
    }
})

module.exports = router

//end line