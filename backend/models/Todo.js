const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

const todo = mongoose.model("todo", todoSchema);
module.exports = todo;