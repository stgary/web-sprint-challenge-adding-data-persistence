
exports.seed = function(knex) {
  return knex('resources').insert([
    {name: 'paper towels', description: 'boring'},
    {name: 'garbage bags', description: 'sucks'},
    {name: 'lawn mower', description: 'never again'}
  ]);

};
