const knex = require('./database');

knex.select().from('users')
.then((users) => {
  console.log(users);
  console.log('process.env', process.env);
  process.exit();
});

