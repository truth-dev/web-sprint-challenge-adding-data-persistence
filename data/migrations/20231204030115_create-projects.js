/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
await knex.schema
.createTable('projects',tab1 => {
tab1.increments('project_id')
tab1.string('project_name',140).notNullable()
tab1.string('project_description',140)
tab1.boolean('project_completed').defaultTo(0)
})
.createTable('resources', tab2 => {
tab2.increments('resource_id')
tab2.string('resource_name', 140).notNullable().unique()
tab2.string('resource_description',140)
})
.createTable('tasks', tab3 => {
tab3.increments('task_id')
tab3.string('task_description').notNullable
tab3.string('task_notes').nullable()
tab3.boolean('task_completed').defaultTo(0)
tab3.integer('project_id')
.references('project_id')
.inTable('projects')
.onDelete('RESTRICT')
.onUpdate('RESTRICT')
})
.createTable('project_resources', tab4 => {
tab4.increments('project_resource_id')
tab4.integer('project_id')
.references('project_id')
.inTable('projects')
.onDelete('RESTRICT')
.onUpdate('RESTRICT')
tab4.integer('resource_id')
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
