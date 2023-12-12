/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').truncate()
  await knex('resources').insert([
    { resource_name: 'gab', resource_description: 'some description'},
    { resource_name: 'blab', resource_description:'blab blab '},
    { resource_name: 'blob', resource_description:'blob blob blob'}
  ]);
};
