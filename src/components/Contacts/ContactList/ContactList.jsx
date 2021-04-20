import PropTypes from 'prop-types';

import ContactItem from 'components/Contacts/ContactItem';
import s from './ContactList.module.css';

const ContactList = ({ deleteContactItem, contacts, setContacts }) => {
  return (
    <ul className={s.container}>
      {contacts.map(el => (
        <ContactItem
          name={el.name}
          number={el.number}
          onDeleteContact={() => deleteContactItem(el, setContacts)}
          key={el.id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContactItem: PropTypes.func.isRequired,
  setContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
