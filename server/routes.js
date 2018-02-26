const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes
  .add('/test', 'test')
  .add('/', 'index');

module.exports = routes;
