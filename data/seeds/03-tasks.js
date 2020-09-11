
exports.seed = function(knex) {
  return knex('tasks').insert([
    {description: 'chore 1', project_id: 1},
    {description: 'chore 2', project_id: 2},
    {description: 'chore 3', project_id: 3}
  ]);
};
