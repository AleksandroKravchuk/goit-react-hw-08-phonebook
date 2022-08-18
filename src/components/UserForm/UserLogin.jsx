import { useState } from 'react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  FormRegister,
  FormBlock,
  FormInput,
  FormLabel,
  FormButtonSubmit,
} from './UserForm.styled';
import {
  useLoginUserMutation,
  //   useGetUserQuery,
} from 'redux/auth/auth-operations';
import { Container } from 'components/App/App.styled';

export const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [addLoginUser] = useLoginUserMutation();
  //   const { data } = useGetUserQuery();

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
    //   if (!data) {
    //     return;
    //   } else {
    //     const normalizedName = name.toLowerCase();
    //     const chekedName = data.find(item => {
    //       return item.name.toLowerCase() === normalizedName;
    //     });
    //     const chekedEmail = data.find(item => {
    //       return item.email === email;
    //     });

    //     if (!chekedName & !chekedEmail) {
    //       addNewUser(newUser);
    //       Notify.success(`User ${name} successfully registered`);
    //       onClose();
    //     }
    //     if (chekedName) {
    //       return Notify.failure(`Sorry, user with  name ${name} already exists `);
    //     }
    //     if (chekedEmail) {
    //       return Notify.failure(
    //         `Sorry, user with  email ${email} already exists`
    //       );
    //     }
    //   }
  };
  const hendelSubmit = evt => {
    evt.preventDefault();
    loginUser();
    setEmail('');
    setPassword('');
  };

  return (
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
          <FormLabel htmlFor="floatingInput">
            Username or email address
          </FormLabel>
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
        <FormButtonSubmit className="btn btn-light">Sign In </FormButtonSubmit>
      </FormRegister>
    </Container>
  );
};
