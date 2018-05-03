import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Main } from '@identity/wrappers';

const Home = ({ users }) => (
  <Main spacing={{ padding: 'vertical-lg' }}>
    <pre>{JSON.stringify(users, null, 2)}</pre>
  </Main>
);

const query = gql`
  {
    allActiveUsers {
      users {
        id
        first_name
        last_name
        weekly_capacity
      }
    }
  }
`;

const withData = graphql(query, {
  props: ({ data: { loading, allActiveUsers } }) => ({
    loading,
    users: allActiveUsers ? allActiveUsers.users : [],
  }),
});

export default withData(Home);
