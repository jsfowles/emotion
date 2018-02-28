/* eslint-disable no-console */
const express = require('express');
const redirectHttps = require('express-http-to-https').redirectToHTTPS;
const next = require('next');
const bodyParser = require('body-parser');
const CORS = require('cors');
const { withGraphiQL, withGraphQL } = require('./graphql');
const routes = require('./routes');
// const homeController = require('./controllers/homeController');

require('dotenv').load();

const { PORT, NODE_ENV } = process.env;
const port = parseInt(PORT, 10) || 3000;
const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);
let server;

app
  .prepare()
  .then(() => {
    server = express();
    server.use(redirectHttps([ /localhost:(\d{4})/ ]));

    // withGraphiQL(server);
    // withGraphQL(server);

    server.use(handler);
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use(CORS());
    server.listen(port, () => {
      console.log(`==> Belly listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });

const graphql = express();
withGraphiQL(graphql);
withGraphQL(graphql);
graphql.use(CORS());
graphql.listen(3001, () => {
  console.log(`==> Belly listening on port ${port}`);
});
