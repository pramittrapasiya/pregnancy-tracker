const express = require("express");
const todoRoute = express.Router();
const todoController = require('../../controller/user/todo');

todoRoute.get('/',(req,res)=>{
    res.send({status: 200, message: "Todo route is working"})
})

todoRoute.post("/createTodo",todoController.todo);
todoRoute.put("/updateTodo/:id",todoController.update);

module.exports = todoRoute;