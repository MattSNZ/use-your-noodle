exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: '1',
          external_id: 'recipe_79093b8c52067832dfdd432bcda92e09',
          label: 'Chow mein cabbage rolls',
          image: 'https://www.edamam.com/web-img/902/902ae240ea066b06ff427838052e83f7.jpg',
          source: 'taste.com.au',
          url: 'https://www.taste.com.au/recipes/chow-mein-cabbage-rolls/7dslo15d',
          yield: '6',
          cuisine_type: 'middle eastern',
          meal_type: 'lunch/dinner',
          dish_type: 'main course',
          total_time: '65'
        }, {
          id: '2',
          external_id: 'recipe_4269924a4adf9a0ec68c42945e332607',
          label: 'Easy 15-Minute Lo Mein',
          image: 'https://www.edamam.com/web-img/a09/a090aea7e9d196317aaaad804cdfb1f0.jpg',
          source: 'mealplannerpro.com',
          url: 'https://mealplannerpro.com/member-recipes/easy-15-minute-lo-mein-635684',
          yield: '6',
          cuisine_type: 'chinese',
          meal_type: 'lunch/dinner',
          dish_type: 'main course',
          total_time: '0'
        }, {
          id: '3',
          external_id: 'recipe_1b2a8c7af35ace36675f699fa4028db9',
          label: 'Spicy Thai Noodles',
          image: 'https://www.edamam.com/web-img/ba0/ba0483f704ac874306049fc75c3ab86d.jpg',
          source: 'myfridgefood.com',
          url: 'https://myfridgefood.com/recipes/pasta-and-pizza/spicy-thai-noodles',
          yield: '10',
          cuisine_type: 'south east asian',
          meal_type: 'lunch/dinner',
          dish_type: 'main course',
          total_time: '0'
        }, {
          id: '4',
          external_id: 'recipe_9a534a2a9c1def60f95a6589134c8cfc',
          label: 'Chicken Hakka Noodles Recipe - How to make Chicken Hakka Noodles',
          image: 'https://www.edamam.com/web-img/f1a/f1ae1270ed2179416c75fe078b8369dc.jpg',
          source: 'tasty-indian-recipes.com',
          url: 'http://www.tasty-indian-recipes.com/indo-chinese/chicken-hakka-noodles-recipe/',
          yield: '4',
          cuisine_type: 'asian',
          meal_type: 'lunch/dinner',
          dish_type: 'main course',
          total_time: '0'
        }, {
          id: '5',
          external_id: 'recipe_1cfa87dfaf24ab7debf2d1f5f0b9c80f',
          label: 'Scallion Oil (Chinese Mother Sauce #1)',
          image: 'https://www.edamam.com/web-img/3ca/3ca30891b7b65218a60f930d339686a5.jpg',
          source: 'Food52',
          url: 'https://food52.com/recipes/70013-scallion-oil-chinese-mother-sauce-1',
          yield: '12',
          cuisine_type: 'chinese',
          meal_type: 'breakfast',
          dish_type: 'condiments and sauces',
          total_time: '0'
        }, {
          id: '6',
          external_id: 'recipe_dd2fd419ed9c72e304ba18ac802a89b1',
          label: 'Garlic Sesame Noodle Salad recipes',
          image: 'https://www.edamam.com/web-img/20d/20d8f990e437cdf5951fcf50c4bdc4cc',
          source: 'lightorangebean.com',
          url: 'http://lightorangebean.com/garlic-sesame-noodle-salad/',
          yield: '3',
          cuisine_type: 'asian',
          meal_type: 'lunch/dinner',
          dish_type: 'salad',
          total_time: '15'
        }
      ])
    })
}
