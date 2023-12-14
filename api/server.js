// build your server here and require it from index.js
const express = require('express')


const projectRouter = require('./project/router')
const resoRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express();
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resoRouter);
server.use('/api/tasks', taskRouter);

server.use((err, req, res,next) => { 
    res.status(err.status || 500).json({
        message: 'something went wrong, try again',
        err: err.message,
        stack: err.stack,
    });
  next()
});

module.exports = server;