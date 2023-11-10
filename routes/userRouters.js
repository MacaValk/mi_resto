const { Router } = require("express");
const {getUsers, 
       postUsers, 
       updateUsers } = require("../controllers/user")
const user = Router();

user.get("/user", getUsers);
user.post("/user/:firstName, :lastName, :employeId", postUsers)
user.put("/user/:userId, :loQueSeQuieraCambiar", updateUsers)

module.exports = user; 