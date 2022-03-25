const dataDay = new Schema ({
    projected: {type: Number, default: 0},
    completed: Number,
    date: String,
    rate: Number
});

const dataWeek = new Schema ({
    projected: Number,
    completed: Number,
    date: String,
    rate: Number
});

const dataMonth = new Schema ({
    projected: Number,
    completed: Number,
    date: String
    rate: Number
});
