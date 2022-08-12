import React from 'react';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactsList, ContactsItem } from './Contacts.styled';
import ContactName from 'components/ContactItem/ContaciItem';
import { useGetContactsQuery } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchGetContact } from 'redux/operations';

const Contacts = () => {
  const { data, error, isFetching } = useGetContactsQuery();

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchGetContact());
  // }, [dispatch]);

  // const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const getVisibleName = () => {
    const normalazedFilter = filter.toLowerCase();
    if (!data) {
      return;
    } else
      return data.filter(item =>
        item.name.toLowerCase().includes(normalazedFilter)
      );
  };
  return (
    <ContactsList>
      {isFetching && <Loader />}
      {getVisibleName() &&
        getVisibleName().map(item => (
          <ContactsItem key={item.id}>
            <ContactName name={item.name} tel={item.phone} id={item.id} />
          </ContactsItem>
        ))}
      {error && Notify.failure('Sorry request failed')}
    </ContactsList>
  );
};

export default Contacts;
