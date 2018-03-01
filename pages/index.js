import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import withData from '../lib/withData';
import View from '@views/Home';

export default withData(() => (
  <React.Fragment>
    <View />
  </React.Fragment>
));
