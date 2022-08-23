import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  FormRegister,
  FormBlock,
  FormInput,
  FormLabel,
  FormButtonSubmit,
} from './UserForm.styled';
import {
  useLoginUserMutation,
  useCurrentUserQuery,
} from 'redux/auth/auth-operations';
import { Container } from 'components/App/App.styled';
import { SectionWrap } from 'components/Home/Home.styled';

export const UserLogin = ({ nameI = 'User', skip = true }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [addLoginUser, error] = useLoginUserMutation();
  const isToken = useSelector(state => state.auth.token);

  if (isToken !== null) {
    skip = false;
  }
  useCurrentUserQuery(nameI, { skip });

  const hendelChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const loginUser = () => {
    const newUser = {
      email,
      password,
    };
    addLoginUser(newUser);
  };
  const hendelSubmit = evt => {
    const isError = error;
    evt.preventDefault();
    console.log(isError);
    loginUser();
    setEmail('');
    setPassword('');
  };
  return (
    <SectionWrap>
      <Container>
        <FormRegister onSubmit={hendelSubmit}>
          <FormBlock className="form-floating mb-3">
            <FormInput
              type="email"
              name="email"
              required
              value={email}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={hendelChange}
            />
            <FormLabel htmlFor="floatingInput">Email address</FormLabel>
          </FormBlock>
          <FormBlock className="form-floating">
            <FormInput
              type="password"
              name="password"
              required
              value={password}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={hendelChange}
            />
            <FormLabel htmlFor="floatingPassword">Password</FormLabel>
          </FormBlock>
          <FormButtonSubmit className="btn btn-light">
            Sign In{' '}
          </FormButtonSubmit>
        </FormRegister>
      </Container>
    </SectionWrap>
  );
};
