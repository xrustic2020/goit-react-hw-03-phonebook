import PropTypes from 'prop-types';

import ContactItem from 'components/Contacts/ContactItem';
import s from './ContactList.module.css';

// import onVisibleContacts from 'utils/onVisibleContacts';

const ContactList = ({
  // visible,
  deleteContactItem,
  contacts,
  filter,
  setContacts,
}) => {
  console.log(contacts);
  const onVisibleContacts = (contacts, filter) => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  // console.log(typeof contacts);
  // console.log(filter);
  return (
    <ul className={s.container}>
      {onVisibleContacts(contacts, filter).map(el => (
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
  // visible: PropTypes.func.isRequired,
  deleteContactItem: PropTypes.func.isRequired,
  setContacts: PropTypes.func.isRequired,
  // contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};

export default ContactList;
