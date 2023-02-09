const express = require("express");
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

mongoose.connect("mongodb://localhost/todolist")
    .then(() => console.log("conect sucefaly"))
    .catch((err) => console.error(err));

app.use("/todos",todoRoutes);

app.listen(PORT, () =>{
    console.log("the server is listening on port " + PORT);
});