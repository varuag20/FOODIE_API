const app = require('./app');

app.listen(process.env.PORT);

/*
  Creating the server in two files.

  -> app.js -> Initialize the express server, the middlewares and the routes.
  -> server.js -> Import the app and listen to a specific port.
*/
