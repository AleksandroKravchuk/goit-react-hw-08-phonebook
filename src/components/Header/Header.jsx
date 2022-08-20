import { Outlet } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import { Container } from 'components/App/App.styled';
import { FaWhatsapp, FaGrinAlt } from 'react-icons/fa';
import { useLogOutUserMutation } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';
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
  const userName = useSelector(state => state.auth.user.name);
  const isUserLogin = useSelector(state => state.auth.isLoading);
  const [logOut] = useLogOutUserMutation();
  // const { data } = useGetContactsQuery();
  const navigate = useNavigate();
  const userExit = () => {
    logOut();

    navigate('/', { replace: true });
  };
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
                    <NavLinkStyled to="/">Home</NavLinkStyled>
                    <NavLinkStyled to="/register">Sign Up</NavLinkStyled>
                    <NavLinkStyled to="/login">Login</NavLinkStyled>
                  </>
                ) : (
                  <>
                    <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
                    <NavButtonStyled onClick={() => userExit()}>
                      LogOut
                    </NavButtonStyled>
                  </>
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
