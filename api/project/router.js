// build your `/api/projects` router here
const express = require("express");
const Projects = require("./model");
const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await Projects.findProjects();
  res.json(projects);
});

router.post("/", async (req, res) => {
  if (!req.body.project_name || !req.body.project_description) {
    res.status(400).json({
      message: "please provide a project name and description",
    });
  } else {
    const newProject = await Projects.findPostPro(req.body);
    res.status(201).json(newProject);
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
