// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model');

const router = express.Router()


router.get('/task', (req, res, next) => {
Task.getAllTasks()
.then(tasks => {
res.status(200).json(tasks)
})
.catch(next)
})

router.get('/task', (req, res, next) => {
Task.getTasksById()
.then(tasks => {
    res.status(200).json(tasks)
})

.catch(next)
})

router.post('/task', (req, res, next) => {
 Task.createTasks(req.body)   
.then(task => {
    res.status(201).json(task)
})
.catch(next)
})



module.exports = router;