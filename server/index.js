/* eslint-disable no-console */
const express = require('express');
const cfGraphql = require('cf-graphql');
const graphqlHTTP = require('express-graphql');
const redirectHttps = require('express-http-to-https').redirectToHTTPS;
const next = require('next');
const bodyParser = require('body-parser');
const CORS = require('cors');
const routes = require('./routes');
// const createGraphqlServer = require('./graphql');

const homeController = require('./controllers/homeController');

require('dotenv').load();

const spaceId = process.env.SPACE_ID;
const cdaToken = process.env.CDA_TOKEN;
const cmaToken = process.env.CMA_TOKEN;

const { PORT, NODE_ENV } = process.env;
const port = parseInt(PORT, 10) || 3000;
const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

function startServer(client, schema) {
  let server;

  app
    .prepare()
    .then(() => {
      server = express();
      server.use(redirectHttps([ '/localhost:(d{4})/', '/graphql' ]));

      const ui = cfGraphql.helpers.graphiql();
      app.get('/graphiql', (_, res) =>
        res
          .set(ui.headers)
          .status(ui.statusCode)
          .end(ui.body),
      );

      const opts = { version: true, timeline: true, detailedErrors: false };
      const ext = cfGraphql.helpers.expressGraphqlExtension(
        client,
        schema,
        opts,
      );
      app.use('/graphql', graphqlHTTP(ext));

      server.use(bodyParser.urlencoded({ extended: true }));
      server.use(bodyParser.json());
      server.use(CORS());
      server.use(handler);
      server.listen(port, () => {
        console.log(`==> Belly listening on port ${port}`);
      });
    })
    .catch((err) => {
      console.log('An error occurred, unable to start the server');
      console.log(err);
    });
}

function useProvidedSpace() {
  const client = cfGraphql.createClient({ spaceId, cdaToken, cmaToken });

  client
    .getContentTypes()
    .then(cfGraphql.prepareSpaceGraph)
    .then((spaceGraph) => {
      const names = spaceGraph.map(ct => ct.names.type).join(', ');
      console.log(`Contentful content types prepared: ${names}`);
      return spaceGraph;
    })
    .then(cfGraphql.createSchema)
    .then(schema => startServer(client, schema))
    .catch(err => console.error(err));
}

if (spaceId && cdaToken && cmaToken) {
  console.log('Space ID, CDA token and CMA token provided');
  console.log(
    `Fetching space (${spaceId}) content types to create a space graph`,
  );
  useProvidedSpace();
}
