const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

module.exports = mongoose.model("todo",todoSchema);