// build your `Task` model here
const db = require('../../data/dbConfig.js')


async function findTasks() {
return await db('tasks')
.join('projects,','tasks.project_id','=','projects.project_id')
.select('tasks.*',
'projects.project_name',
'projects.project_description')
  
}






async function postTasks(task) {
const [task_id] = await db('tasks').insert(task) 
const newTask = await db('tasks').where({task_id}).first() 
return {
    ...newTask,
    task_completed: newTask.task_completed === 1 ? true : false
}
 
}   


module.exports = {
findTasks,
postTasks
}