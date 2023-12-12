// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')
const router = express.Router()


/**
 *    [GET] /api/projects                                                                                         
        × [1] can get all projects that exist in the table (104 ms)                                               
        × [2] each project contains project_name, project_description and project_completed (as a boolean) (84 ms)
      [POST] /api/projects                                                                                        
        × [3] can add a new project to the table (84 ms)                                                          
        × [4] responds with the newly created project with its project_completed as a boolean (68 ms)             
        √ [5] rejects projects lacking a project_name with an error status code (66 ms)     
 */

        router.get('/', async (req, res,) => {

            
         const projects = await Projects.findProjects()
         res.json(projects)
        });
        
        router.post('/', async (req, res, ) => {
            if(!req.body.project_name || !req.body.project_description){
                res.status(400).json({
                    message: "please provide a project name and description"
                })
            }
            else{
                const newProject = await Projects.findPostPro(req.body)
                res.status(201).json(newProject)
            }
          const newP = await Projects.findPostPro(req.body);
            res.status(201).json(newP)
        });
router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: 'something went wrong, try again',
        err: err.message,
        stack:err.stack,
    })
    next()
});



module.exports = router;