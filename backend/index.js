const express = require("express");
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

const user = "lesther"
const password = "lesthersillo"
const dbName = "todolist"
const uri = `mongodb+srv://${user}:${password}@cluster0.uuhuggk.mongodb.net/${dbName}`; 

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('base de datos conectada'))
    .catch(e => console.log(e))

app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        );
        res.header("Access-Control-Allow-Credentials", "true");
        next();
      });
app.use("/todo",todoRoutes);

app.listen(PORT, () =>{
    console.log("the server is listening on port " + PORT);
});