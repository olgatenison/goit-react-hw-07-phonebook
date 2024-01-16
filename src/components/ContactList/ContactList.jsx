import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/operation';
import { useEffect } from 'react';
import { getContacts, getFilter } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts?.items?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => dispatch(deleteContact(id));

  if (!filteredContacts?.length) {
    return <p className={css.txt}>No contacts found.</p>;
  }

  return (
    <div>
      <ul className={css.ul}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <p className={css.txt}>
              <span className={css.name}>{contact.name}: </span>
              {contact.number}
            </p>

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
  );
};

export default ContactList;
