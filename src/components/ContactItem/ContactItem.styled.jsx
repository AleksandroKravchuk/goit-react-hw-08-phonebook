import styled from '@emotion/styled';

export const ContactsText = styled.p`
  position: relative;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.white};
  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  padding: ${props => props.theme.spacing.step}px;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;
export const Tel = styled.span`
  position: absolute;
  left: 50%;
  top: 14%;
  font-size: 12px;
  margin-left: ${props => props.theme.spacing.step}px;
  color: ${props => props.theme.colors.light};
  margin-left: auto;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    top: 20%;
    left: 44%;
    font-size: ${props => props.theme.fontSizes.small};
  }
`;
export const ButtonDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.small};
  background-color: ${props => props.theme.colors.primary};
  width: ${props => props.theme.spacing.step * 12}px;
  height: ${props => props.theme.spacing.step * 5}px;
  border-radius: ${props => props.theme.spacing.step}px;
  right: ${props => props.theme.spacing.step}px;
  top: ${props => props.theme.spacing.step}px;
  position: absolute;
  cursor: pointer;
  border: none;
  transition: background-color 250ms linear;
  :hover {
    color: ${props => props.theme.colors.dark};
    background-color: bisque;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    top: ${props => props.theme.spacing.step * 2}px;
  }
`;
