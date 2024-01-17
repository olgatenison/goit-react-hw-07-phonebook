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

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => dispatch(deleteContact(id));

  if (!contacts) {
    return <p className={css.txt}>Loading contacts...</p>;
  }

  if (!filteredContacts?.length) {
    return <p className={css.txt}>No contacts found.</p>;
  }

  return (
    <div>
      {console.log('Filtered Contacts:', filteredContacts)}
      <ul className={css.ul}>
        {filteredContacts.map(({ id, name, phone }) => (
          <li key={id} className={css.item}>
            <p className={css.txt}>
              <span className={css.name}>{name}: </span>
              {phone}
            </p>

            <button
              className={css.btn}
              type="button"
              name="delete"
              onClick={() => handleDelete(id)}
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
