const mongoose = require('mongoose');

const quesSchema = new mongoose.Schema({
    question : {type: String, required: true},
    answer : {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
});

module.exports = mongoose.model("Ques", quesSchema);