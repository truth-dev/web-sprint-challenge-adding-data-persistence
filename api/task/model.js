// build your `Task` model here
const db = require('../../data/dbConfig.js')


async function getAllTasks() {
const tasks = await db('tasks')
.select(
 'tasks.task_id',
 'tasks.task_description',
 'tasks.task_notes',
 'tasks.task_completed',
 'projects.project_name',
 'projects.project_description'

)
.join('projects','tasks.project_id','=', 'projects.project_id');

const newTask = tasks.map(task => ({
    ...task, 
    task_completed: newTask.task_completed === 1 ? true : false
}))

return newTask

}



async function createTasks(task) {
const [task_id] = await db('tasks').insert(task) 
const newTask = await db('tasks').where('task_id',task_id).first() 
const result = {
    ...newTask,
    task_completed: newTask.task_completed === 1 ? true : false     
}   
return result
}

module.exports = {
    getAllTasks,
    createTasks
}