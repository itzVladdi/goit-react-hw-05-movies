import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
