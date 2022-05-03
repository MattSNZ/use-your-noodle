
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favourite_recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('favourite_recipes').insert([
        {id: 1, recipe_id: 1, user_id: '1'},
        {id: 2, recipe_id: 2, user_id: '1'},
        {id: 3, recipe_id: 3, user_id: '1'},
        {id: 4, recipe_id: 4, user_id: '1'},
        {id: 5, recipe_id: 5, user_id: '1'},
        {id: 6, recipe_id: 6, user_id: '1'},
        {id: 8, recipe_id: 10, user_id: '1'},
        {id: 9, recipe_id: 11, user_id: '1'},
        {id: 10, recipe_id: 12, user_id: '1'},
        {id: 12, recipe_id: 14, user_id: '1'},
        {id: 13, recipe_id: 15, user_id: '1'},
        {id: 14, recipe_id: 16, user_id: '1'},
        {id: 15, recipe_id: 17, user_id: '1'},
        {id: 16, recipe_id: 18, user_id: '1'},
        {id: 17, recipe_id: 19, user_id: '1'},
        {id: 18, recipe_id: 20, user_id: '1'},
        {id: 19, recipe_id: 21, user_id: '1'},
        {id: 20, recipe_id: 22, user_id: '1'},
        {id: 21, recipe_id: 23, user_id: '1'},
        {id: 22, recipe_id: 24, user_id: '1'},
        {id: 23, recipe_id: 25, user_id: '1'},
        {id: 24, recipe_id: 26, user_id: '1'},
        {id: 25, recipe_id: 27, user_id: '1'},
        {id: 26, recipe_id: 28, user_id: '1'},
        {id: 27, recipe_id: 30, user_id: '1'},
        {id: 28, recipe_id: 32, user_id: '1'}
      ]);
    });
};
