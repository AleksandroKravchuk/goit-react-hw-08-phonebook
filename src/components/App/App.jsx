import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import { Form } from '../Form/Form';
// import { Modal } from 'components/Modal/Modal-form';
import { UserForm } from 'components/UserForm/UserForm';
import { UserLogin } from 'components/UserForm/UserLogin';
import { Header } from 'components/Header/Header';

const App = () => {
  // const [showModal, setShowModal] = useState(false);

  // const toggleModal = evt => {
  //   setShowModal(!showModal);
  //   // if (!showModal) {
  //   //   const itemId = evt.currentTarget.id;
  //   //   // eslint-disable-next-line array-callback-return
  //   //   foto.map(item => {
  //   //     if (item.id === Number(itemId)) {
  //   //       setfotoModal(item.largeImageURL);
  //   //     }
  //   //   });
  //   // }
  // };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/register" element={<UserForm />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>

      {/* {showModal && (
        <Modal onClose={toggleModal}>
          <UserForm onClose={toggleModal} />
        </Modal>
      )} */}
      {/* <button onClick={toggleModal}>SignUp</button> */}
    </>
  );
};

export default App;
