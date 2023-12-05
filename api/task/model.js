// build your `Task` model here
const db = require('../../data/dbConfig.js')


async function getAllTasks() {
const tasks = await db('tasks as t')
.select(
 't.task_id',
 't.task_description',
 't.task_notes',
 't.task_completed',
 'projects.project_name',
 'projects.project_description'

)
.join('projects','t.project_id','=', 'projects.project_id');

const newTask = tasks.map(task => ({
    ...task, 
    task_completed: newTask.task_completed === 1 ? true : false
}))

return newTask

}



async function createTasks(task) {
const [task_id] = await db('task').insert(task) 
const newTask = await db('task').where('task_id',task_id).first() 
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