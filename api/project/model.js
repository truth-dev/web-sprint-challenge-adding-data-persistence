// build your `Project` model here

const db = require('../../data/dbConfig')



async function findProjects() {
    return db('projects').select('*')
}

async function findPostPro(projects) {
  const [project_id] = await db('projects').insert(projects)
  return db('projects').where('project_id', project_id).first()
}
module.exports = {
  findProjects,
  findPostPro
}
