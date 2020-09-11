
exports.seed = function(knex) {
    return knex('projects').insert([
      {name: 'project 1', description: 'clean the garage', resource_id: 1},
      {name: 'project 2', description: 'take out the trash', resource_id: 2},
      {name: 'project 3', description: 'mow the lawn', resource_id: 3}
    ]);
};
