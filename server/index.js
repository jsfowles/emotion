/* eslint-disable no-console */
const express = require('express');
const redirectHttps = require('express-http-to-https').redirectToHTTPS;
const next = require('next');
const bodyParser = require('body-parser');
const CORS = require('cors');
const { withGraphQL, withGraphiQL } = require('./graphql');
const { ApolloEngine } = require('apollo-engine');
const routes = require('./routes');

require('dotenv').load();

const { PORT, NODE_ENV, APOLLO_ENGINE } = process.env;
const port = parseInt(PORT, 10) || 3000;
const dev = NODE_ENV !== 'production';
const nextApp = next({ dev });
const handler = routes.getRequestHandler(nextApp);
let expressApp;

const engine = new ApolloEngine({ apiKey: APOLLO_ENGINE });

nextApp
  .prepare()
  .then(() => {
    expressApp = express();
    expressApp.use(redirectHttps([/localhost:(\d{4})/]));

    withGraphQL(expressApp);
    withGraphiQL(expressApp);

    expressApp.get('*', (req, res) => handler(req, res));

    expressApp.use(bodyParser.urlencoded({ extended: true }));
    expressApp.use(bodyParser.json());
    expressApp.use(CORS());

    engine.listen({ port, expressApp }, () => {
      console.log(`==> Belly listening on port ${port}`);
    });
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
