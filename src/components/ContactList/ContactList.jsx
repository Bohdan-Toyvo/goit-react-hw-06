import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const allContacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name || '');

  const filteredContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
