
exports.seed = function(knex) {
    return knex('projects').insert([
      {name: 'project 1', description: 'clean the garage'},
      {name: 'project 2', description: 'take out the trash'},
      {name: 'project 3', description: 'mow the lawn'}
    ]);
};
