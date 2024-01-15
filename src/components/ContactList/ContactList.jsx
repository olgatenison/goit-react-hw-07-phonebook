import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contactSlice';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/operation';

const ContactList = () => {
  // Отримання контактів та фільтру зі стору
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // Фільтрація контактів за допомогою введеного фільтру
  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  // Функція для видалення контакту
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  // Перевірка, чи є відфільтровані контакти
  if (!filteredContacts?.length) {
    return <p className={css.txt}>No contacts found.</p>;
  }

  // Відображення списку контактів
  return (
    <>
      <div>
        <ul className={css.ul}>
          {filteredContacts.map(contact => (
            <li key={contact.id} className={css.item}>
              <p className={css.txt}>
                {' '}
                <span className={css.name}>{contact.name}: </span>{' '}
                {contact.number}
              </p>

              {/* видалення */}
              <button
                className={css.btn}
                type="button"
                name="delete"
                onClick={() => handleDelete(contact.id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
