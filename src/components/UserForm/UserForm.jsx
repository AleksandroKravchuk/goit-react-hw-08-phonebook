import { useState } from 'react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  FormRegister,
  FormBlock,
  FormInput,
  FormLabel,
  FormButtonSubmit,
} from './UserForm.styled';
import { useSelector } from 'react-redux';
import {
  useAddUserMutation,
  useCurrentUserQuery,
} from 'redux/auth/auth-operations';
import { Container } from 'components/App/App.styled';
import { SectionWrap } from 'components/Home/Home.styled';
export const UserForm = ({ nameI = 'User', skip = true }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [addNewUser, isError] = useAddUserMutation();
  const isToken = useSelector(state => state.auth.token);

  if (isToken !== null) {
    skip = false;
  }
  useCurrentUserQuery(nameI, { skip });

  const hendelChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
  const addUser = () => {
    const newUser = {
      name,
      email,
      password,
    };
    addNewUser(newUser);
  };
  const hendelSubmit = evt => {
    console.log(isError);
    // const signError = error.status;
    evt.preventDefault();
    addUser();
    setName('');
    setEmail('');
    setPassword('');
    // console.log(errors);
    // // const signError = error.status;
    // console.log(error);

    // if (signError === 'uninitialized') {
    //   return Notify.failure('Please enter your data');
    // }
  };

  return (
    <SectionWrap>
      <Container>
        <FormRegister onSubmit={hendelSubmit}>
          <FormBlock className="form-floating mb-3">
            <FormInput
              type="text"
              name="name"
              required
              value={name}
              className="form-control"
              id="floatingName"
              placeholder="name@example.com"
              onChange={hendelChange}
            />
            <FormLabel htmlFor="floatingInput">Name</FormLabel>
          </FormBlock>

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
          <FormButtonSubmit className="btn btn-light">Sign Up</FormButtonSubmit>
        </FormRegister>
      </Container>
    </SectionWrap>
  );
};
