import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
import { Form } from '../Form/Form';
import { UserForm } from 'components/UserForm/UserForm';
import { useSelector } from 'react-redux';
import { useCurrentUserQuery } from 'redux/auth/auth-operations';
import { UserLogin } from 'components/UserForm/UserLogin';
import { Header } from 'components/Header/Header';
import Home from 'components/Home/Home';
// import { skipToken } from '@reduxjs/toolkit/dist/query';

const App = ({ name = 'User', skip = true }) => {
  const isUserLogin = useSelector(state => state.auth.isLoading);
  const isToken = useSelector(state => state.auth.token);

  if (isToken !== null) {
    skip = false;
  }
  useCurrentUserQuery(name, { skip });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {isUserLogin && <Route path="/contacts" element={<Form />} />}

        <Route path="/register" element={<UserForm />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </>
  );
};

export default App;
