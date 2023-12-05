// build your server here and require it from index.js
const express = require('express')
const helmet = require('helmet')

const projectRouter = require('./project/router')
const resoRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express();
server.use(helmet());
server.use(express.json());

server.use('/project ', projectRouter);
server.use('/resource', resoRouter);
server.use('/task', taskRouter);

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack:err.stack,
        
    })
   next()
})

module.exports = server;