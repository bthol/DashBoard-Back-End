//start line

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daySchema = new Schema ([
    {
    projected: {val: Number, default: 0},
    completed: {val: Number, default: 0},
    date: String
    }
]);

const DataModelDay = mongoose.model('DataModelDay', daySchema);

module.exports = DataModelDay

//for future development
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