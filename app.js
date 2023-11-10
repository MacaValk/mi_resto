// instancia de express
const express = require('express');
// middlewares
const morgan = require('morgan');
const cors = require("cors")
// rutas 
const user = require("./routes/userRouters")

const server = express(); 

server.use(cors())
server.use(morgan('dev'));


server.use(user); 



module.exports = server; 