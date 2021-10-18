# A website that helps you use your noodle

This is a personal project that combines my interest in coding and my love of noodles.

## Getting Started

```
git clone https://github.com/MattSNZ/use-your-noodle.git
cd use-your-noodle
cp server/.env.example server/.env    # enable environment variables - DM Matt
npm install                           # install dependencies
npm run knex migrate:latest           # create database
npm run knex seed:run                 # create seeds
npm run dev                           # start the dev server
```

Once you've done that, you can use your noodle on localhost:3000

---

**TODO:**

[ ] Search by *type* of noodle.

[ ] Add Snackbar component for saving favourites

[ ] Complete implmentation of users

*Plenty else*