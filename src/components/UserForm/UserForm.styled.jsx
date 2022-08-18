import styled from '@emotion/styled';

export const FormRegister = styled.form`
  background-color: ${props => props.theme.colors.dark};
  width: 500px;
  padding: 20px;
  /* margin-top: 20px; */
  /* margin-left: auto;
  margin-right: auto; */
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
`;

export const FormBlock = styled.div``;
export const FormInput = styled.input``;
export const FormLabel = styled.label``;
export const FormButtonSubmit = styled.button`
  font-size: 20px;
  font-weight: bold;
  padding: 5px 20px;
  border-radius: 6px;
  margin-top: 20px;
  margin-left: 50%;
  transform: translateX(-50%);
  background-color: white;
`;
export const FormButtonExit = styled.button`
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-items: center;
  border-radius: 50%;
  background-color: white;
  justify-content: end;
  margin-left: 95%;
  margin-bottom: 15px;
  transition: background-color 250ms linear;
  :hover {
    background-color: #cdcccc;
  }
`;
