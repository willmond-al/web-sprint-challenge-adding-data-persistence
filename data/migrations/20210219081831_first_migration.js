
exports.up = function(knex) {
  return knex.schema
  .createTable("projects", tbl => {
      tbl.increments("project_id")
      tbl.string("project_name").notNullable()
      tbl.string("project_description")
      tbl.boolean("project_completed").notNullable().default(false)
  })
  .createTable("resources", tbl => {
    tbl.increments("resource_id")
    tbl.string("resource_name").notNullable().unique()
    tbl.string("resource_description")
  })
  .createTable("tasks", tbl => {
    tbl.increments("task_id")
    tbl.string("task_description").notNullable()
    tbl.string("task_notes")
    tbl.boolean("task_completed").notNullable().default(false)
    tbl.integer("project_id").notNullable()
    .references("project_id")
    .inTable("projects")
    .onDelete("RESTRICT")
  })
  .createTable("project_resources", tbl => {
      tbl.increments("project_resource_id")
      tbl.integer("project_id")
      .references("project_id")
      .inTable("projects")
      .onDelete("RESTRICT")
      tbl.integer("resource_id")
      .references("resource_id")
      .inTable("resources")
      .onDelete("RESTRICT")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("projects")
  .dropTableIfExists("resources")
  .dropTableIfExists("tasks")
};
