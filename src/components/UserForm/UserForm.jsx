import { useState } from 'react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  FormRegister,
  FormBlock,
  FormInput,
  FormLabel,
  // FormButtonExit,
  FormButtonSubmit,
} from './UserForm.styled';
import {
  useAddUserMutation,
  // useGetUserQuery,
} from 'redux/auth/auth-operations';
// import { AiOutlineClose } from 'react-icons/ai';
import { Container } from 'components/App/App.styled';
import { useDispatch } from 'react-redux';
import { getDataRegister } from 'redux/auth/auth-slice';

export const UserForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [addNewUser, result] = useAddUserMutation();
  const dataRegister = result.data;
  if (result.data) {
    dispatch(getDataRegister(dataRegister));
  }

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
    // if (!data) {
    //   return;
    // } else {
    //   const normalizedName = name.toLowerCase();
    //   const chekedName = data.find(item => {
    //     return item.name.toLowerCase() === normalizedName;
    //   });
    //   const chekedEmail = data.find(item => {
    //     return item.email === email;
    //   });

    //   if (!chekedName & !chekedEmail) {
    //     addNewUser(newUser);
    //     Notify.success(`User ${name} successfully registered`);
    //     onClose();
    //   }
    //   if (chekedName) {
    //     return Notify.failure(`Sorry, user with  name ${name} already exists `);
    //   }
    //   if (chekedEmail) {
    //     return Notify.failure(
    //       `Sorry, user with  email ${email} already exists`
    //     );
    //   }
    // }
  };
  const hendelSubmit = evt => {
    evt.preventDefault();
    addUser();
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <FormRegister onSubmit={hendelSubmit}>
        {/* <FormButtonExit onClick={() => onClose()}>
        <AiOutlineClose className="button__exit" />
      </FormButtonExit> */}
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
  );
};
