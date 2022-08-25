import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from 'components/Header/Header';
import Home from 'components/Home/Home';
import { Form } from '../Form/Form';
import { UserForm } from 'components/UserForm/UserForm';
import { UserLogin } from 'components/UserForm/UserLogin';

const App = () => {
  const isUserLogin = useSelector(state => state.auth.isLoading);
  const isRefreshing = useSelector(state => state.auth.isFetchingCurrent);
  return (
    isRefreshing && (
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
          <Route path="*" element={<Home />} />
        </Routes>
      </>
    )
  );
};

export default App;
