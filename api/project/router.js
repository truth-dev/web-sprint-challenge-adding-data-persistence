// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router()


router.get('/', async (req, res, next) => {

try{
   
    const projects = await Project.getAllProjects()
    res.status(200).json(projects)
} catch (err) {
    next(err)
}

})



router.post('/', async (req, res, next) => {
const project = req.body 

if(!project || !project.project_name) {
   return res.status(400).json({
        message: 'project name and description required'
    })
}               
try {
    const newProject = await Project.createProjects(project)
    res.status(201).json(newProject)    
} catch (err) { 
    next(err)

}
})   
router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: 'something went wrong, try again',
        err: err.message,
        stack:err.stack,
    })
    next()
});



module.exports = router;