import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles/theme';

export const NavBar = styled.header`
  display: flex;
  z-index: 10;
  width: 100%;
  position: fixed;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${props => props.theme.colors.mainBackground};
  box-shadow: 0px 2px 10px 1px ${props => props.theme.colors.dark};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 90px;
  background: ${theme.colors.mainBackground};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 400;
  text-transform: uppercase;
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: ${props => props.theme.animations.cubicBezier};
  transform: scale(0.9);
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 500;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 700;
    &.active {
      padding: 6px 12px;
    }
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
  }
  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.accent};
    padding: 3px 6px;
    border-radius: 4px;
    transform: scale(1);
    pointer-events: none;
  }
`;
export const NavButtonStyled = styled.button`
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 400;
  cursor: pointer;
  text-transform: uppercase;
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: ${props => props.theme.animations.cubicBezier};
  transform: scale(0.9);
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 500;
    &:hover,
    &:focus {
      padding: 6px 12px;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 700;
    &.active {
      padding: 6px 12px;
    }
  }
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.accent};
    padding: 3px 6px;
    border-radius: 4px;
    transform: scale(1);
  }
`;
export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.step * 2}px;
  margin-left: ${props => props.theme.spacing.step * 2}px;
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    gap: ${props => props.theme.spacing.step * 5}px;
    margin-left: ${props => props.theme.spacing.step * 7}px;
  }
`;
export const UserName = styled.p`
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 400;
  text-align: center;
  margin-left: 5px;
  margin-bottom: 0px;
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 700;
  }
`;
export const UserLogo = styled.span`
  margin-right: 4px;
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    margin-right: 10px;
  }
`;
export const HeaderBlock = styled.div`
  display: flex;
`;
