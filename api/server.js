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

server.use('*', (req, res) => { // eslint-disable-line
    res.status(404).json({ message: 'not found' });
    }); 

module.exports = server;