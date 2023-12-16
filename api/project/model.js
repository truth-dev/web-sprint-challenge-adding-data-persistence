// build your `Project` model here

const db = require('../../data/dbConfig')



async function findProjects() {
  const projects = await db('projects')
  const result = projects.map(project => ({
    ...project,
    project_completed: Boolean(project.project_completed)
  }))
  return result
}

async function findPostPro(projects) {
  const [project_id] = await db('projects').insert(projects)
  const result = await db('projects').where({ project_id }).first()
  return {
    ...result,
    project_completed: Boolean(result.project_completed)
  }
  
}
module.exports = {
  findProjects,
  findPostPro
}
