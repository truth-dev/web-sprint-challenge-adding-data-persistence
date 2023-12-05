// build your `Project` model here

const db = require('../../data/dbConfig')



async function getAllProjects() {
const projects = await db('projects')
const result = projects.map(proj => {
    return { 
        ...proj,
        project_completed: proj.project_completed === 1 ? true : false
    }
  
})
return result

}



async function createProjects(project) {
const [project_id] = await db('projects').insert(project)

const newProject = await db('projects')
.where('project_id',project_id)
.first()

const result = {
    ...newProject,
    project_completed: newProject.project_completed === 1 ? true : false
} 
return result 
}

module.exports = {
    getAllProjects,
    createProjects
}