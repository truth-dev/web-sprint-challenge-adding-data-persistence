// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) => {

  try {
const task = await Task.findTasks();
  res.json(task);
    
       
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res,) => {

  if(!req.body.task_description || !req.body.project_id){
    res.status(400).json({
      message: "please provide a task description and project id"
    })
  }
const newTask = await Task.postTasks(req.body)
res.status(201).json({
  ...newTask,
  task_completed: newTask.task_completed ? true : false
})
  
});
  

router.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
        message: 'something went wrong, try again',
        err: err.message,
        stack: err.stack,
    });
    next();
});

module.exports = router;
