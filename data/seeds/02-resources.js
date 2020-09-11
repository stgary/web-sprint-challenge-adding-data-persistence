
exports.seed = function(knex) {
  return knex('resources').insert([
    {name: 'paper towels', description: 'chores', project_id: 1},
    {name: 'garbage bags', description: 'chores', project_id: 2},
    {name: 'lawn mower', description: 'chores', project_id: 3}
  ]);

};
