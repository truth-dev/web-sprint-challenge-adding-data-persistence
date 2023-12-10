// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) => {
   
  try {
    const tasks = await Task.getAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  Task.createTasks(req.body);
  try {
    const newTsk = await Task.createTasks(req.body);
    res.status(201).json(newTsk);
  } catch (err) {
    next(err);
  }
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
