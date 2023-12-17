// build your `/api/projects` router here
const express = require("express");
const Projects = require("./model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const projects = await Projects.findProjects();
    res.status(200).json(projects);
  }
  catch (err) {
next(err)
  }
 
});

router.post("/", async (req, res, next) => {
  const { project_name } = req.body;

  if (!project_name) {
    return res.status(400).json({
      message: "please provide a project name",
    });
  }

  try {
    const newProject = await Projects.findPostPro(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res) => {
  res.status(err.status || 500).json({
    message: "something went wrong, try again",
    err: err.message,
    stack: err.stack,
  });
 
});

module.exports = router;
