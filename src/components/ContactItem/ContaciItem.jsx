import React from 'react';
import PropTypes from 'prop-types';
import { ContactsText, Tel, ButtonDelete } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/operations';
import { LoaderButton } from 'components/Loader/Loader';

const ContactName = ({ name, tel, id }) => {
  const [deleteContakt, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <ContactsText>
      {name}: <Tel>{tel}</Tel>
      <ButtonDelete onClick={() => deleteContakt(id)} disabled={isDeleting}>
        {isDeleting ? <LoaderButton /> : 'Delete'}
      </ButtonDelete>
    </ContactsText>
  );
};

ContactName.propTypes = {
  name: PropTypes.string,
  tel: PropTypes.string,
  id: PropTypes.string,
};
export default ContactName;
