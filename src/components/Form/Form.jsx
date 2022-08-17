import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FormName, InputName, Label, Button } from './Form.styled';
import { useAddContactMutation, useGetContactsQuery } from 'redux/operations';
import { LoaderButton } from 'components/Loader/Loader';
import Section from 'components/Section/Section';
import { Container } from 'components/App/App.styled';
import Contacts from 'components/Contacts/Contacts';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContacts, { isLoading }] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const onChangeInput = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const addName = () => {
    const nameItem = {
      name,
      phone: number,
    };
    if (!data) {
      return;
    } else {
      const normalizedName = name.toLowerCase();
      const chekedName = data.find(item => {
        return item.name.toLowerCase() === normalizedName;
      });
      const chekedTel = data.find(item => {
        return item.phone === number;
      });

      if (!chekedName & !chekedTel) {
        addContacts(nameItem);
        Notify.success(`${name} added in contacts`);
      }
      if (chekedName) {
        return Notify.failure(`${name} is already in contacts`);
      }
      if (chekedTel) {
        return Notify.failure(`Number ${number} is already in contacts`);
      }
    }
  };
  const hendelSubmit = evt => {
    evt.preventDefault();
    if (name === '' || number === '') {
      return;
    }
    addName();
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <Section title={'Phonebook'}>
        <FormName onSubmit={hendelSubmit}>
          <Label>
            Name
            <InputName
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={onChangeInput}
            />
          </Label>{' '}
          <Label>
            Number
            <InputName
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={onChangeInput}
            />
          </Label>{' '}
          <Button type="submit">
            {isLoading ? <LoaderButton /> : 'Add contact'}
          </Button>
        </FormName>
      </Section>
      <Contacts />
    </Container>
  );
};
