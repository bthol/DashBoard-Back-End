// const express = require("express");
// const app = express();

// const mongoose = require(`mongoose`);
// const UserModel = require("./Models/UserModel")

// app.use(express.json())
// app.use(express.urlencoded({extended: true}))

// //User Index
// app.get(`/`, (req, res) => {
//     const ID = req;
//     res.send(`user index is active ldfk `)
// })

// //CRUD Operations
// //Create Route
// app.post(`/`, (req, res) => {
//     const ID = req;
//     res.send(`create route ran by ${ID}`)
//     redirect(`/user`)
// })

// //Read Route
// app.get(`/:id`, (req, res) => {
//     const ID = req;
//     res.send(`user ead route ran by ${ID}`)
// })

// //Update Route
// app.put(`/:id/edit`, (req, res) => {
//     const ID = req;
//     res.send(`user update route ran by ${ID}`)
//     redirect(`/user`)
// })

// //Delete Route
// app.delete(`/:id`, (req, res) => {
//     const ID = req;
//     res.send(`user delete route ran by ${ID}`)
//     redirect(`/user`)
// })


// module.exports = app.listen(3000, () => {
//     console.log("user routes are online")
// });