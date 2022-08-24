import styled from '@emotion/styled';

export const Label = styled.label`
  width: 100%;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.small};
`;
export const FilterInput = styled.input`
  background-color: #e8e3e3;
  padding: 5px;
  width: 100%;
  border: solid 2px black;
`;
