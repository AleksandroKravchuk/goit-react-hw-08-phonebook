import { Outlet } from 'react-router-dom';
import { useTheme } from '@emotion/react';

import { Container } from 'components/App/App.styled';
import { FaWhatsapp } from 'react-icons/fa';

import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <FaWhatsapp size="40px" color={theme.colors.light} />
            <LinkWrapper>
              <NavLinkStyled to="/">Home</NavLinkStyled>
              <NavLinkStyled to="/register">Sign Up</NavLinkStyled>
              <NavLinkStyled to="/login">Login</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </Container>
      </NavBar>

      <Outlet />
    </>
  );
};
