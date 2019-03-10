
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
  .then(function () {
    // Inserts seed entries
    return knex('products').insert([
      {id:1, name:'toy', price:40, inventory:20},
      {id:2, name:'clock', price:60, inventory:70}
    ])
  })
};