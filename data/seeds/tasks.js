/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').truncate()
  await knex('tasks').insert([
    { task_description: 'dobby is a house elf', task_notes: 'some notes', task_completed: false, project_id: 1},

    { task_description: 'dumbledore says i recieve 40 points to my house', task_notes: 'no notes ', 
     task_completed: false, project_id: 2},

    { task_description: 'can i be a gamer', task_notes:'why no notes', task_completed: false, project_id: 3}

  ]);
};
