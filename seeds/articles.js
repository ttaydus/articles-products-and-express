
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {id: 1, title:'testTitle', body:'testBody', author:'testAuthor', url:'testUrl'}
      ]);
    });
};
