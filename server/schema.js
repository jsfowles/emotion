const { makeExecutableSchema } = require('graphql-tools');

const fetch = require('node-fetch');

const gql = String.raw;

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    myFavoriteArtists: [Artist]
  }

  type User @cacheControl(maxAge: 60) {
    id: ID
    first_name: String
    last_name: String
    weekly_capacity: String
  }
`;
