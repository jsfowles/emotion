const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cfGraphql = require('cf-graphql');

const withGraphiQL = (app) => {
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
};

const withGraphQL = (app) => {
  const spaceId = process.env.SPACE_ID;
  const cdaToken = process.env.CDA_TOKEN;
  const cmaToken = process.env.CMA_TOKEN;

  const client = cfGraphql.createClient({ spaceId, cdaToken, cmaToken });
  client
    .getContentTypes()
    .then(cfGraphql.prepareSpaceGraph)
    .then(spaceGraph => spaceGraph)
    .then(cfGraphql.createSchema)
    .then((schema) => {
      app.use(
        '/graphql',
        bodyParser.json(),
        graphqlExpress({
          tracing: true,
          schema,
          context: { entryLoader: client.createEntryLoader() },
        }),
      );
    });
};

module.exports = {
  withGraphiQL,
  withGraphQL,
};
