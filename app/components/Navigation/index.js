import React from 'react';

import Logo from '../Logo';
import Shadow from '../Shadow';

import {
  LogoLink,
  Header,
  Nav,
  NavLink,
} from './styles';

export default () => (
  <Header>
    <LogoLink>
      <Logo />
    </LogoLink>

    <Nav>
      <NavLink active>We Are Netflix</NavLink>
      <NavLink>Teams</NavLink>
      <NavLink>Locations</NavLink>
      <NavLink>Inclusion & Diversity</NavLink>
      <NavLink>Benefits</NavLink>
    </Nav>

    <Shadow />
  </Header>
);