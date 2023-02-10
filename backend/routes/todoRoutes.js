const express = require("express")
const router = express.Router();

const todo = require("../models/todo");

router.get("/", async (req, res) =>{
    try {
        const arrayTododb = await todo.find()
        res.json(arrayTododb)
    } catch (error) {
        console.log(result);   
    }
});

module.exports = router;