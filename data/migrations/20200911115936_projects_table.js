
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('id');
            tbl.string('name', 256)
                .notNullable();
            tbl.string('description', 500);
            tbl.boolean('project_completed').defaultTo('false');
        })
        .createTable('resource', tbl => {
            tbl.increments('id');
            tbl.string('name', 256).notNullable();
            tbl.string('description', 500);
        })
        .createTable('tasks', tbl => {
            tbl.increments('id');
            tbl.string('description', 500).notNullable();
            tbl.string('notes', 500);
            tbl.boolean('task_completed').defaultTo('false')
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })
    };

exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists('tasks')
        .dropTableIfExists('resource')
        .dropTableIfExists('projects');
    };
