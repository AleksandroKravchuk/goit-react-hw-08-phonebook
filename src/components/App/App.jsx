import { Routes, Route } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
// import { useCurrentUserQuery } from 'redux/auth/auth-operations';
// import PrivateRoute from 'components/PrivateRoute';
// import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import Home from 'components/Home/Home';
import { Form } from '../Form/Form';
import { UserForm } from 'components/UserForm/UserForm';
import { UserLogin } from 'components/UserForm/UserLogin';

// const Header = lazy(() => import('../../components/Header/Header'));
// const Home = lazy(() => import('../Home/Home'));
// const Form = lazy(() => import('../Form/Form'));
// const UserForm = lazy(() => import('../UserForm/UserForm'));
// const UserLogin = lazy(() => import('../UserForm/UserLogin'));

const App = () => {
  const isUserLogin = useSelector(state => state.auth.isLoading);
  return (
    // <Suspense fallback={<Loader />}>

    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {isUserLogin ? (
          <>
            <Route path="/contacts" element={<Form />} />
            <Route path="/register" element={<Form />} />
            <Route path="/login" element={<Form />} />
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

    // </Suspense>
  );
};

export default App;
