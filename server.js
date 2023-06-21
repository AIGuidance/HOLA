var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(express.static('public'));

var routes = require("./api/routes");
routes(app);

if (! module.parent) {
  app.listen(port);sgsddsg
} hola
1e
module.exports = app
dgfsgdg
console.log("Server running on porwt " + port);
d6ytfuvhbkasdasdßqfqe12eonlkñhdsfhhdftuk