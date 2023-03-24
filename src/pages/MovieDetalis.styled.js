import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackLink = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: 10px;
  transform: translate(-50% -50%);
  font-weight: 500;
  font-size: 15px;
  color: black;
`;

export const MovieWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
`;
export const ImgWrapper = styled.div`
  width: 300px;
  height: 450px;
`;

export const InfoWrapper = styled.div`
  display: block;
  width: calc(100% - 320px);
  padding: 10px;
`;
export const AddInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AdditionalList = styled.ul`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 7px 0px rgba(0, 0, 0, 0.14), 0px 1px 4px 3px rgba(0, 0, 0, 0.12);
`;
export const AddInfoNavLink = styled(NavLink)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 480px;
  height: 40px;

  background-color: #55bce420;

  font-weight: 500;
  font-size: 15px;
  color: #29abdd;

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
    background-color: #dd5b29;
  }
`;
