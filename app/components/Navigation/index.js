import React from 'react';

import Logo from '../Logo';
import Shadow from '../Shadow';
import NavigationContainer from '../../containers/Navigation';

import {
  LogoLink,
  Header,
  Nav,
  NavLink,
  SearchJobsBtn,
} from './styles';

const testing = (e) => {
  e.preventDefault();
  console.log('Testing');
};

export default () => (
  <NavigationContainer>
    { (searchOpen, toggleSearch) => (
      <Header>
        <LogoLink>
          <Logo />
        </LogoLink>

        <Nav>
          <NavLink active>We Are Netflix</NavLink>
          <NavLink href="/test" onClick={ testing }>Teams</NavLink>
          <NavLink>Locations</NavLink>
          <NavLink>Inclusion & Diversity</NavLink>
          <NavLink>Benefits</NavLink>

          <SearchJobsBtn
            onClick={ toggleSearch }
            searchOpen={ searchOpen }
          >
            Search Jobs
          </SearchJobsBtn>
        </Nav>

        <Shadow />
      </Header>
    )}
  </NavigationContainer>
);
