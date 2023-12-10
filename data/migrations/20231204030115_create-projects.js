/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
await knex.schema
.createTable('projects',tab => {
tab.increments('project_id')
tab.string('project_name',140).notNullable()
tab.string('project_description',140)
tab.boolean('project_completed').defaultTo(0)
})
.createTable('resources', tab => {
tab.increments('resource_id')
tab.string('resource_name', 140).notNullable().unique()
tab.string('resource_description',140)
})
.createTable('tasks', tab => {
tab.increments('task_id')
tab.string('task_description').notNullable
tab.string('task_notes')
tab.boolean('task_completed').defaultTo(0)
tab.integer('project_id').unsigned().notNullable()
.references('project_id')   
.inTable('projects')
.onDelete('RESTRICT')
.onUpdate('RESTRICT')

})
.createTable('project_resources', tab => {
tab.increments('project_resource_id')
tab.integer('project_id').unsigned().notNullable()
.references('project_id')
.inTable('projects')
.onDelete('RESTRICT')
.onUpdate('RESTRICT')
tab.integer('resource_id').unsigned().notNullable() 
.references('resource_id')
.inTable('resources')
.onDelete('RESTRICT')
.onUpdate('RESTRICT')


}   
)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('projects')
  .dropTableIfExists('resources')
  .dropTableIfExists('tasks')
};
