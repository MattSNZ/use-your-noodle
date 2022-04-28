
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'a',
          hash: '$argon2id$v=19$m=65536,t=2,p=1$l1z/VLsXAQBl5XqcyFLKQQ$Pj5chC+TwoENcLx9R7/A6PqSEtbOnlZdouQ4ti1Z14E'
        }
      ]);
    });
};
