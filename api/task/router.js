// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");
const Project = require("../project/model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const task = await Task.findTasks();
    res.json(task);
  } catch (err) {
    next(err);
  }
});



router.post("/", async (req, res, next) => {
  const { task_description, project_id } = req.body;

  if (!task_description || !project_id) {
    return res.status(400).json({
      message: "please provide a task description and project id",
    });
  }

  try {
    const project = await Project.findProjectById(project_id);

    if (!project) {
      return res.status(400).json({ message: 'Invalid project_id' });
    }

    const newTask = await Task.postTasks(req.body);
    res.status(201).json({
      ...newTask,
      task_completed: Boolean(newTask.task_completed),
    });
  } catch (err) {
    next(err);
  }
});


module.exports = router;
