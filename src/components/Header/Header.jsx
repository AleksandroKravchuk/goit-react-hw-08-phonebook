import { Outlet } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import { Container } from 'components/App/App.styled';
import { FaWhatsapp, FaGrinAlt } from 'react-icons/fa';
import { useLogOutUserMutation } from 'redux/auth/auth-operations';
// import authSelectors from 'redux/auth/auth-selectors';
import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
  UserName,
  UserLogo,
  HeaderBlock,
  NavButtonStyled,
} from './Header.styled';

export const Header = () => {
  // console.log(authSelectors.getIsLoggedIn());
  const theme = useTheme();
  const userName = useSelector(state => state.authSlice.user.name);
  const isUserLogin = useSelector(state => state.authSlice.isLoading);
  const [logOut] = useLogOutUserMutation();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <HeaderBlock>
              <FaWhatsapp size="40px" color={theme.colors.light} />
              <LinkWrapper>
                {!isUserLogin ? (
                  <>
                    <NavLinkStyled to="/register">Sign Up</NavLinkStyled>
                    <NavLinkStyled to="/login">Login</NavLinkStyled>
                  </>
                ) : (
                  <NavButtonStyled onClick={()=>logOut()}>LogOut</NavButtonStyled>
                )}
              </LinkWrapper>
            </HeaderBlock>
            {isUserLogin && (
              <UserName>
                <UserLogo>
                  <FaGrinAlt size="24px" color={theme.colors.light} />
                </UserLogo>
                {userName}
              </UserName>
            )}
          </HeaderWrapper>
        </Container>
      </NavBar>

      <Outlet />
    </>
  );
};
