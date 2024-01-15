import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/operation';
import { getContacts } from '../../redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // Функція, яка викликається при подачі форми
  const handleSubmit = evt => {
    evt.preventDefault();

    // Створення нового контакту з отриманими даними та унікальним ідентифікатором
    const newContact = {
      id: nanoid(),
      name: evt.target.elements.name.value,
      number: evt.target.elements.number.value,
    };

    // Перевірка, чи контакт вже існує
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
    // Повідомлення, якщо контакт вже існує
    if (isExist) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    // Передача нового контакту в store
    dispatch(addContact(newContact));

    // Очищення стану після подачі форми
    evt.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required className={css.input} />
        </label>

        <label>
          Number:
          <input className={css.input} type="tel" name="number" required />
        </label>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
