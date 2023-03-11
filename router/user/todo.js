const express = require("express");
const todoRoute = express.Router();
const todoController = require('../../controller/user/todo');

todoRoute.get('/',(req,res)=>{
    res.send({status: 200, message: "Todo route is working"})
})

todoRoute.post("/createTodo",todoController.todo);

module.exports = todoRoute;