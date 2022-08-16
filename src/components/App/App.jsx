// import { Routes, Route } from 'react-router-dom';
import Section from '../Section/Section';
import { useState } from 'react';
import { Form } from '../Form/Form';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import { Modal } from 'components/Modal/Modal-form';
import { UserForm } from 'components/UserForm/UserForm';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = evt => {
    setShowModal(!showModal);
    // if (!showModal) {
    //   const itemId = evt.currentTarget.id;
    //   // eslint-disable-next-line array-callback-return
    //   foto.map(item => {
    //     if (item.id === Number(itemId)) {
    //       setfotoModal(item.largeImageURL);
    //     }
    //   });
    // }
  };
  return (
    <>
      <Section title={'Phonebook'}>
        <Form />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <Contacts />
      </Section>
      {showModal && (
        <Modal onClose={toggleModal}>
          <UserForm onClose={toggleModal} />
        </Modal>
      )}
      <button onClick={toggleModal}>SignUp</button>
    </>
  );
};

export default App;
