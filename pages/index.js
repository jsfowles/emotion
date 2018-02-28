import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import withData from '../lib/withData';
import Setup from '@containers/Setup';
import View from '@views/Raw';

export default withData(() => (
  <React.Fragment>
    <View />
  </React.Fragment>
));
