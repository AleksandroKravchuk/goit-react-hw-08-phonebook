import styled from '@emotion/styled';

export const FormRegister = styled.form`
  background-color: ${props => props.theme.colors.dark};
  text-align: start;
  width: 300px;
  padding: 10px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 370px) {
    width: 90vw;
  }
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    top: 20%;
    padding: 15px;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    width: 400px;
    padding: 20px;
  }
`;

export const FormBlock = styled.div``;
export const FormInput = styled.input``;
export const FormLabel = styled.label``;
export const FormButtonSubmit = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 4px 14px;
  border-radius: 6px;
  margin-top: 20px;
  margin-left: 50%;
  transform: translateX(-50%);
  background-color: white;
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: 18px;
    font-weight: bold;
    padding: 5px 18px;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: 14px;
    font-weight: bold;
    padding: 5px 20px;
  }
`;
