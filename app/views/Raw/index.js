import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Main } from '@identity/wrappers';

export const Raw = ({ data: { loading, error, linkedProjects } }) => (
  <Main>
    <p>Props</p>
    {loading ? (
      <p>loading...</p>
    ) : (
      <div>
        {linkedProjects &&
          linkedProjects.map(project => (
            <li>
              <div>
                <span>{project.projectName}</span>
              </div>
            </li>
          ))}
      </div>
    )}
  </Main>
);

const CASE_STUDIES = gql`
  query CaseStudies {
    linkedProjects {
      projectName
    }
  }
`;

export default graphql(CASE_STUDIES)(Raw);
