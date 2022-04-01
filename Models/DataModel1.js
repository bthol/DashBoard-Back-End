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

const DataModel1 = mongoose.model('DataModel1', daySchema);

module.exports = DataModel1

//JSON format
// {
//     "projected": {
//         "val":"0"
//     },
//     "completed": {
//         "val":"0"
//     },
//     "date":"00/00/0000"
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