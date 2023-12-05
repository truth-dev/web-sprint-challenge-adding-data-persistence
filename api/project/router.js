// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router()


router.get('/', async (req, res, next) => {
Project.getAllProjects()
try{
    const projects = await Project.getAllProjects()
    res.status(200).json(projects)
} catch (err) {
    next(err)
}

})



router.post('/', async (req, res, next) => {
const project = req.body 

if(!project.project_name || !project.project_description) {
    res.status(400).json({
        message: 'project name and description required'
    })
} else {                            
    next()
}               
try {
    const newProject = await Project.createProjects(project)
    res.status(201).json(newProject)    
} catch (err) { 
    next(err)

}
})   



module.exports = router;