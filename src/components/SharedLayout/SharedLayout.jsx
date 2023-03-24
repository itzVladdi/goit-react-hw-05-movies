import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, StyledNavLink } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <Container>
      <Header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
}
