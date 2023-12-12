/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').truncate()
  await knex('projects').insert([
    { project_name: 'foo' , project_description: 'crazy length' , project_completed:false},
    { project_name: 'baz', project_description: 'harry potter is awesome!' , project_completed: false },
    { project_name: 'bar', project_description: 'dont tread on me ' , project_completed: false },
  ])
};
