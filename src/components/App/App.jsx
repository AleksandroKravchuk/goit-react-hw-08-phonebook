import { Routes, Route } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useCurrentUserQuery } from 'redux/auth/auth-operations';
// import PrivateRoute from 'components/PrivateRoute';
// import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import Home from 'components/Home/Home';
import { Form } from '../Form/Form';
import { UserForm } from 'components/UserForm/UserForm';
import { UserLogin } from 'components/UserForm/UserLogin';
// import { skipToken } from '@reduxjs/toolkit/dist/query';

// const Header = lazy(() => import('../../components/Header/Header'));
// const Home = lazy(() => import('../Home/Home'));
// const Form = lazy(() => import('../Form/Form'));
// const UserForm = lazy(() => import('../UserForm/UserForm'));
// const UserLogin = lazy(() => import('../UserForm/UserLogin'));

const App = ({ name = 'auth', skip = true }) => {
  const isUserLogin = useSelector(state => state.auth.isLoading);
  const isToken = useSelector(state => state.auth.token);
  // const isRefreshing = useSelector(state => state.auth.isFetchingCurrent);
  console.log(isToken);
  if (isToken !== null) {
    skip = false;
  }
  useCurrentUserQuery(name, { skip });

  return (
    // <Suspense fallback={<Loader />}>
    // !isRefreshing && (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {isUserLogin ? (
          <>
            <Route path="/contacts" element={<Form />} />
            <Route path="/register" element={<Home />} />
            <Route path="/login" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/register" element={<UserForm />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/contacts" element={<UserLogin />} />
          </>
        )}
      </Routes>
    </>
    // )
    // </Suspense>
  );
};

export default App;
