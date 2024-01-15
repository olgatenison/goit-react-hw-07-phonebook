import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import css from './App.module.css';

const App = () => {
  // Повертає розмітку для відображення на сторінці
  return (
    <>
      <div className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <Filter />
        <h2 className={css.title}>Contacts</h2>
        <ContactList />
      </div>
    </>
  );
};

export default App;
