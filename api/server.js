// build your server here and require it from index.js
const express = require('express')


const projectRouter = require('./project/router')
const resoRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express();
server.use(express.json());

server.use('/projects', projectRouter);
server.use('/resources', resoRouter);
server.use('/tasks', taskRouter);

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: 'something is wrong with the server, please wait and try again',
        err: err.message,
        stack:err.stack,
        
    })
   next()
})

module.exports = server;