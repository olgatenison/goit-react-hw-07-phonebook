import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import css from './App.module.css';

import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Повертає розмітку для відображення на сторінці

  return (
    <>
      <div className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <Filter />
        <h2 className={css.title}>Contacts</h2>
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
        {contacts.length > 0 ? (
          <Filter />
        ) : (
          <div>Your phonebook is empty. Add first contact!</div>
        )}
      </div>
    </>
  );
};

export default App;
