const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const { schema } = require('./schema');

const withGraphiQL = app => {
  app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
};

const withGraphQL = app => {
  app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
      tracing: true,
      cacheControl: true,
      schema,
      context: {
        secrets: process.env,
      },
    }),
  );
};

module.exports = { withGraphQL, withGraphiQL };
