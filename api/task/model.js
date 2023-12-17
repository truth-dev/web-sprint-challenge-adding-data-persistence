// build your `Task` model here
const db = require("../../data/dbConfig.js");

async function findTasks() {
  const tasks = await db("tasks")
    .join("projects", "tasks.project_id", "projects.project_id")
    .select("tasks.*", "projects.project_name", "projects.project_description");

  const result = tasks.map((task) => ({
    ...task,
    task_completed: Boolean(task.task_completed),
  }));
  return result;
}




async function postTasks(task) {
  if (!task.task_description || !task.project_id) {
    return { error: 'Task description and project_id  is required' };
  }

  const [task_id] = await db("tasks").insert(task);
  const result = await db("tasks").where({ task_id }).first();

  return {
    ...result,
    task_completed: Boolean(result.task_completed),
  };
}

module.exports = {
  findTasks,
  postTasks,
 
};
