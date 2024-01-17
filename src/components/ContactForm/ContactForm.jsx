import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/operation';
import { getContacts } from '../../redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // Функция, которая вызывается при подаче формы
  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;

    // Проверка наличия контакта с таким же именем
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      return alert(`${name} is already in contacts.`);
    }

    // Создание нового контакта с полученными данными и уникальным идентификатором

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));

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
