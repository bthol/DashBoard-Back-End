//start line

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daySchema = new Schema ({
    projected: {type: Number, default: 0},
    completed: {type: Number, default: 0},
    date: { type: Date, default: Date.now },
}, {timeStamps: false});

const DataModel1 = mongoose.model('DataModel1', daySchema);

module.exports = DataModel1

//JSON format
// {
//     "projected": "0",
//     "completed": "0"
// }

//////////////////////////////////////

//FUTURE DEVELOPMENT

// const dataWeek = new Schema ({
//     projected: Number,
//     completed: Number,
//     date: String,
//     rate: Number
// });

// const dataMonth = new Schema ({
//     projected: Number,
//     completed: Number,
//     date: String,
//     rate: Number
// });

//end line