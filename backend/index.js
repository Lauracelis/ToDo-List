const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://lauracelis29:Lucky2021...@cluster0.zvfnon6.mongodb.net/?retryWrites=true&w=majority`; 


mongoose.connect(uri ,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('base de datos conectada'))
    .catch(e => console.log(e))

app.use("/todos",todoRoutes);

app.listen(PORT, () =>{
    console.log("the server is listening on port " + PORT);
});