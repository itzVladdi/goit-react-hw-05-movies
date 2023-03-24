import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  margin-top: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 7px 5px rgba(0, 0, 0, 0.12);
  > nav {
    display: flex;
    width: 100%;
    height: 41px;
    align-items: center;
  }
`;
export const StyledNavLink = styled(NavLink)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 480px;
  height: 45px;
  font-weight: 500;
  text-decoration: none;
  color: #29abdd;
  font-size: 18px;
  background-color: #55bce420;
  border-radius: 6px;
  &:hover {
    color: #2088b0;
  }
  &:hover::after {
    background-color: #2088b0;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    height: 3px;
    border-radius: 2px;
    background-color: #29abdd;
  }
  &.active {
    color: #dd5b29;
    background-color: #e47d5520;
  }
  &.active:hover {
    color: #b04820;
  }
  &.active:hover::after {
    background-color: #b04820;
  }
  &.active::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    height: 3px;
    border-radius: 2px;
    background-color: #dd5b29;
  }
`;
