onst express = require("express");
const app = express();

const mongoose = require(`mongoose`);

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//User Index
app.get(`/user`, (req, res) => {
    const ID = req;
    res.send(`user index is active`)
})

//CRUD Operations
//Create Route
app.post(`/user`, (req, res) => {
    const ID = req;
    res.send(`create route ran by ${ID}`)
    redirect(`/user`)
})

//Read Route
app.get(`/user/:id`, (req, res) => {
    const ID = req;
    res.send(`user ead route ran by ${ID}`)
})

//Update Route
app.put(`/user/:id/edit`, (req, res) => {
    const ID = req;
    res.send(`user update route ran by ${ID}`)
    redirect(`/user`)
})

//Delete Route
app.delete(`user/:id`, (req, res) => {
    const ID = req;
    res.send(`user delete route ran by ${ID}`)
    redirect(`/user`)
})


module.export = app.listen(3000, () => {
    console.log("user routes are online")
});