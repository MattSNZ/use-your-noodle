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
          total_time: '65'
        },
        {
          id: '2',
          external_id: 'recipe_4269924a4adf9a0ec68c42945e332607',
          label: 'Easy 15-Minute Lo Mein',
          image: 'https://www.edamam.com/web-img/a09/a090aea7e9d196317aaaad804cdfb1f0.jpg',
          source: 'mealplannerpro.com',
          url: 'https://mealplannerpro.com/member-recipes/easy-15-minute-lo-mein-635684',
          yield: '6',
          cuisine_type: 'chinese',
          meal_type: 'lunch/dinner',
          total_time: '0'
        },
        {
          id: '3',
          external_id: 'recipe_1b2a8c7af35ace36675f699fa4028db9',
          label: 'Spicy Thai Noodles',
          image: 'https://www.edamam.com/web-img/ba0/ba0483f704ac874306049fc75c3ab86d.jpg',
          source: 'myfridgefood.com',
          url: 'https://myfridgefood.com/recipes/pasta-and-pizza/spicy-thai-noodles',
          yield: '10',
          cuisine_type: 'south east asian',
          meal_type: 'lunch/dinner',
          total_time: '0'
        },
        {
          id: '4',
          external_id: 'recipe_9a534a2a9c1def60f95a6589134c8cfc',
          label: 'Chicken Hakka Noodles Recipe - How to make Chicken Hakka Noodles',
          image: 'https://www.edamam.com/web-img/f1a/f1ae1270ed2179416c75fe078b8369dc.jpg',
          source: 'tasty-indian-recipes.com',
          url: 'http://www.tasty-indian-recipes.com/indo-chinese/chicken-hakka-noodles-recipe/',
          yield: '4',
          cuisine_type: 'asian',
          meal_type: 'lunch/dinner',
          total_time: '0'
        },
        {
          id: '5',
          external_id: 'recipe_1cfa87dfaf24ab7debf2d1f5f0b9c80f',
          label: 'Scallion Oil (Chinese Mother Sauce #1)',
          image: 'https://www.edamam.com/web-img/3ca/3ca30891b7b65218a60f930d339686a5.jpg',
          source: 'Food52',
          url: 'https://food52.com/recipes/70013-scallion-oil-chinese-mother-sauce-1',
          yield: '12',
          cuisine_type: 'chinese',
          meal_type: 'breakfast',
          total_time: '0'
        },
        {
          id: '6',
          external_id: 'recipe_dd2fd419ed9c72e304ba18ac802a89b1',
          label: 'Garlic Sesame Noodle Salad recipes',
          image: 'https://www.edamam.com/web-img/20d/20d8f990e437cdf5951fcf50c4bdc4cc',
          source: 'lightorangebean.com',
          url: 'http://lightorangebean.com/garlic-sesame-noodle-salad/',
          yield: '3',
          cuisine_type: 'asian',
          meal_type: 'lunch/dinner',
          total_time: '15'
        },
        {
          id: "10",
          external_id: "recipe_3e8d48378c381f581b4b1ec74a203a5f",
          label:  "Ramen in a South Indian Coconut Stew recipes",
          image:  "https://www.edamam.com/web-img/a55/a5532ecc10a43178bd88d21c3f8c38a7",
          source:  "holycowvegan.net",
          url:  "http://holycowvegan.net/2016/11/ramen-south-indian-coconut-stew.html",
          yield:  "4",
          cuisine_type:  "indian",
          meal_type:  "lunch/dinner",
          total_time:   "20"
        },
        {
          id: "12",
          external_id: "recipe_2ae56d34f431278ba881b31e4b69f6c6",
          label: "Ramen Noodle Bowl with Chicken Thighs",
          image: "https://www.edamam.com/web-img/57d/57db20f69fe4335d0ffeced73a250190.jpg",
          source: "The Daily Meal",
          url: "http://www.thedailymeal.com/recipes/ramen-noodle-bowl-chicken-thighs-recipe",
          yield: "6",
          cuisine_type: "japanese",
          meal_type: "lunch/dinner",
          total_time:  "0"
        },
        {
          id: "13",
          external_id: "recipe_a6d6a9f6c99f64736a9c474e30f52983",
          label: "Delectable Roasted Pulled Pork recipes",
          image: "https://www.edamam.com/web-img/0dc/0dc72275463a875ff4bcccab44ef817f",
          source: "vodkaandbiscuits.com",
          url: "http://www.vodkaandbiscuits.com/2014/03/14/the-best-roasted-pulled-pork/",
          yield: "8",
          cuisine_type: "american",
          meal_type: "lunch/dinner",
          total_time:  "360"
        },
        {
          id: "14",
          external_id: "recipe_d144f43c43825ee3b973198bcdc14e37",
          label: "Burmese Noodle Bowl recipes",
          image: "https://www.edamam.com/web-img/a10/a109120986fd176caae7288aacec1b09",
          source: "eatineatout.ca",
          url: "http://eatineatout.ca/burmese-noodle-bowl/",
          yield: "6",
          cuisine_type: "asian",
          meal_type: "lunch/dinner",
          total_time:  "45"
        },
        {
          id : "15",
          external_id: "recipe_19bdd4c980ac9cf9afb5dac1ae1958e0",
          label: "Homemade Potato Sev - Indian Style Spicy Fried Noodles",
          image: "https://www.edamam.com/web-img/7ae/7ae8efb6ee63d8e5317326a938ba8f65.jpeg",
          source: "Honest Cooking",
          url: "http://honestcooking.com/homemade-potato-sev-indian-style-spicy-fried-noodles/",
          yield: "2",
          cuisine_type: "indian",
          meal_type: "lunch/dinner",
          total_time:  "45"
        },
        {
          id: "16",
          external_id: "recipe_11c7786b62694203cfa4bb259cd95fbe",
          label: "Lasagna Roll Ups Recipe 4",
          image: "https://www.edamam.com/web-img/7ec/7ece92b34bda2a41d118c792846192a9.jpg",
          source: "Taste of Home",
          url: "http://www.tasteofhome.com/Recipes/Lasagna-Roll-Ups",
          yield: "3",
          cuisine_type: "italian",
          meal_type: "lunch/dinner",
          total_time:  "55"
        },
        {
          id : "17",
          external_id: "recipe_0b1c7b126eb2fbda51a6767895f79e1b",
          label: "THAI PEANUT SESAME VERMICELLI NOODLES ??? Steemit",
          image: "https://www.edamam.com/web-img/1da/1da106f432609a3fdd73bad4ff3c8384.jpg",
          source: "steemit.com",
          url: "https://steemit.com/food/@gringalicious/thai-peanut-sesame-vermicelli-noodles",
          yield: "4",
          cuisine_type: "south east asian",
          meal_type: "lunch/dinner",
          total_time:  "0"
        },
        {
          id: "18",
          external_id: "recipe_760281ac9f385d504050a07513e517b3",
          label: "A Pad Thai Worth Making",
          image: "https://www.edamam.com/web-img/f9b/f9bfb37af3350f16085dd82ef8d03a7d.jpg",
          source: "Allrecipes",
          url: "http://allrecipes.com/Recipe/A-Pad-Thai-Worth-Making/Detail.aspx",
          yield: "3",
          cuisine_type: "south east asian",
          meal_type: "lunch/dinner",
          total_time:  "0"
        },
        {
          id: "19",
          external_id: "recipe_c462b7cedf39cad8282e7f97eb9731b2",
          label: "One-Pan Pork and Ramen Noodles",
          image: "https://www.edamam.com/web-img/1c1/1c1e7d2d8395d070387af74333470323.jpg",
          source: "mygourmetconnection.com",
          url: "https://www.mygourmetconnection.com/one-pan-pork-and-ramen-noodles",
          yield: "4",
          cuisine_type: "asian",
          meal_type: "lunch/dinner",
          total_time:"0"
        },
        {
          id: "20",
          external_id: "recipe_e60fd8781ab7af20377c07c079bcfc7e",
          label: "Pad Thai",
          image: "https://www.edamam.com/web-img/8bb/8bb979f3a2ae2bde1181448101ccddf2.jpeg",
          source: "taste.com.au",
          url: "https://www.taste.com.au/recipes/pad-thai-5/958e31e9-0564-49dd-9e18-087fe0ba30c2",
          yield: "4",
          cuisine_type: "south east asian",
          meal_type: "lunch/dinner",
          total_time: "30"
        },
        {
          id: "21",
          external_id: "recipe_24012f4379fbe69bfdff7e335d1c3c59",
          label: "Sesame Noodles",
          image: "https://www.edamam.com/web-img/4e9/4e9d4d8e7fa8fe09f82341d460ddea17.jpg",
          source: "tastykitchen.com",
          url: "https://tastykitchen.com/recipes/main-courses/sesame-noodles-4/",
          yield: "5",
          cuisine_type: "asian",
          meal_type: "lunch/dinner",
          total_time: "18"
        },
        {
          id:   "22",
          external_id: "recipe_ebf53129d3170a661d9cb3d320a14859",
          label: "Beef Chow Mein",
          image: "https://www.edamam.com/web-img/3af/3afb70a59a9fc1c9d3ef8d89ccea9eb8.jpg",
          source: "recipecommunity.com.au",
          url: "https://www.recipecommunity.com.au/main-dishes-meat-recipes/beef-chow-mein/ilqg3749-cd98f-249361-cfcd2-95d3mvhe",
          yield: "10",
          cuisine_type: "asian",
          meal_type: "lunch/dinner",
          total_time: "0"
        },
        {
          id:"23",
          external_id: "recipe_25d25cea3b610ad97aed3b16a5743992",
          label: "Beef Stroganoff and Noodle Soup",
          image: "https://www.edamam.com/web-img/ace/ace5f940265ce400cd6f162b2506031c.jpg",
          source: "foodpair.com",
          url: "http://foodpair.com/recipes/beef-stroganoff-and-noodle-soup",
          yield: "14",
          cuisine_type: "eastern europe",
          meal_type: "lunch/dinner",
          total_time: "0"
        },
        {
          id: "24",
          external_id: "recipe_eaa4b3744ad860234ac2b4b9ba51ea7f",
          label: "Miso Fried Eggs",
          image: "https://www.edamam.com/web-img/a20/a20a82be360ef41d4626f2f45d0db902.JPG",
          source: "Foodista",
          url: "http://www.foodista.com/recipe/XPNJRJ2N/miso-fried-eggs",
          yield: "1",
          cuisine_type: "japanese",
          meal_type: "breakfast",
          total_time: "0"
        },
        {
          id:  "25",
          external_id: "recipe_b3dd9f7508f57808acc4d11c565e3804",
          label: "Singapore Hawker Noodles With Coconut recipes",
          image: "https://www.edamam.com/web-img/d60/d6093aaed1aa98eda8df308b190666be",
          source: "eatprayjuice.us",
          url: "http://www.eatprayjuice.us/2015/02/singapore-hawker-noodles-with-coconut.html",
          yield: "4",
          cuisine_type: "south east asian",
          meal_type: "lunch/dinner",
          total_time: "25"
        },
        {
          id: "26",
          external_id: "recipe_5c22a67abe118835a539e1e1cdf0ffd0",
          label: "Pak Choi - Noodles Soup recipes",
          image: "https://www.edamam.com/web-img/a99/a99ace505d9d536fdf7fc6af5c71c3b4",
          source: "monsoonspice.com",
          url: "http://www.monsoonspice.com/2008/02/soup-for-soul.html",
          yield: "2",
          cuisine_type: "asian",
          meal_type: "lunch/dinner",
          total_time: "10"
        },
        {
          id: "27",
          external_id: "recipe_2f2c7dcaa725cd1a0c1d89ab20238527",
          label: "Vietnamese Vegetable Vermicelli Bowl",
          image: "https://www.edamam.com/web-img/2a8/2a8f43795857f25a3952266bb5020975",
          source: "justapinch.com",
          url: "https://www.justapinch.com/recipes/main-course/other-main-course/vietnamese-vegetable-vermicelli-bowl.html",
          yield: "4",
          cuisine_type: "south east asian",
          meal_type: "lunch/dinner",
          total_time: "15"
        },
        {
          id:  "28",
          external_id: "recipe_d093e0ba4c83e6f10303412cc7e57939",
          label: "Pancit Palabok (Filipino Noodles With Smoky Pork and Seafood Sauce) Recipe",
          image: "https://www.edamam.com/web-img/b95/b952a73082c20e58cab880cf7f8fa27a.jpg",
          source: "Serious Eats",
          url: "https://www.seriouseats.com/recipes/2019/12/pancit-palabok-filipino-noodles-with-smoky-pork-and-seafood-sauce.html",
          yield: "6",
          cuisine_type: "asian",
          meal_type: "lunch/dinner",
          total_time: "180"
        },
        {
          id: "30",
          external_id: "recipe_b36c5d9c7d282090c53f5418f7c05cd5",
          label: "Garlic & Cashew Noodle Salad recipes",
          image: "https://www.edamam.com/web-img/14b/14b3748e1edf82a16e76c31ec83366b9",
          source: "bitchincamero.com",
          url: "http://www.bitchincamero.com/mel/2010/03/garlic-cashew-noodle-salad/http://www.bitchincamero.com/mel/2010/03/garlic-cashew-noodle-salad/",
          yield: "4",
          cuisine_type: "asian",
          meal_type: "lunch/dinner",
          total_time: "35"
        },
        {
          id: "32",
          external_id: "recipe_ce0cbe68f43fa3317b2076f0189075cf",
          label: "Ginger-Scallion Lo Mein",
          image: "https://www.edamam.com/web-img/2b0/2b0c58cd24310aacf88a2a327898133a.jpeg",
          source: "Food Network",
          url: "https://www.foodnetwork.com/recipes/food-network-kitchen/ginger-scallion-lo-mein-4664837",
          yield: "4",
          cuisine_type: "chinese",
          meal_type: "lunch/dinner",
          total_time: "60"
        }
      ])
    })
}
