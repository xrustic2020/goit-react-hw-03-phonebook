import PropTypes from 'prop-types';

import ContactItem from 'components/Contacts/ContactItem';
import s from './ContactList.module.css';

export default function ContactList({ visible, deleteContactItem }) {
  return (
    <ul className={s.container}>
      {visible().map(el => (
        <ContactItem
          name={el.name}
          number={el.number}
          onDeleteContact={() => deleteContactItem(el)}
          key={el.id}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  visible: PropTypes.func.isRequired,
  deleteContactItem: PropTypes.func.isRequired,
};
