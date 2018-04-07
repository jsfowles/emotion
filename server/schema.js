const { makeExecutableSchema } = require('graphql-tools');

const fetch = require('node-fetch');

const gql = String.raw;
const ENDPOINT = 'https://api.harvestapp.com/api/v2/';
const headers = ({ secrets }) => ({
  Authorization: `Bearer ${secrets.HARVEST_TOKEN}`,
  'Harvest-Account-Id': secrets.HARVEST_ACCOUNT_ID,
});

const typeDefs = gql`
  type Query {
    allActiveUsers: Users
  }

  type Users @cacheControl(maxAge: 60) {
    users: [User]
  }

  type User @cacheControl(maxAge: 60) {
    id: ID
    first_name: String
    last_name: String
    weekly_capacity: String
  }
`;

const resolvers = {
  Query: {
    allActiveUsers: async (artist, args, context) => {
      const userRes = await fetch(`${ENDPOINT}users?is_active=true`, {
        headers: headers(context),
      });

      if (userRes.status === 200) {
        const { users } = await userRes.json();
        return { users };
      }

      return {};
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = { schema };
