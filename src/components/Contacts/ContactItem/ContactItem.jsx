import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

export default function ContactItem({ name, number, onDeleteContact }) {
  return (
    <li className={s.listItem}>
      <div className={s.fullName}>
        <span>{name}: </span>
        <span>{number}</span>
      </div>
      {/* <button type="button" className={s.button} onClick={onDeleteContact}>
        Delete
      </button> */}
      <IconButton aria-label="Delete" onClick={onDeleteContact}>
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
