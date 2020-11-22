const jsonServer = require('json-server');                  // импорт json-server
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');       // берём нашу базу данных
const middlewares = jsonServer.defaults({                   // запустить реакт приложение в папке './build'
  static: './build',
});

const PORT = process.env.PORT || 3001;                      // heroku передаёт свой порт в переменную process.env.PORT

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {                                 // запустить по определённому порту node.js приложение
  console.log('Server is running');
});