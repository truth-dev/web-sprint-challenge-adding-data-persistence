/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tab) => {
      tab.increments("project_id");
      tab.string("project_name").notNullable();
      tab.string("project_description");
      tab.boolean("project_completed").defaultTo(false);
    })
    .createTable("resources", (tab) => {
      tab.increments("resource_id");
      tab.string("resource_name").notNullable().unique();
      tab.string("resource_description", 140);
    })
    .createTable("tasks", (tab) => {
      tab.increments("task_id");
      tab.string("task_description").notNullable;
      tab.string("task_notes");
      tab.boolean("task_completed").defaultTo(false);
      tab
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");

     
    })
    
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};
