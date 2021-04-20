import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Button from '@material-ui/core/Button';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuid } from 'uuid';

import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

const ContactForm = ({ onAddedContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      id: uuid().slice(30),
      name,
      number,
    };
    onAddedContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={evt => handleSubmit(evt)} className={s.form}>
      <div className={s.overlay}>
        <label>
          <span className={s.labels}>Name</span>
          <input
            type="text"
            name="name"
            className={s.input}
            value={name}
            onChange={evt => setName(evt.target.value)}
          />
        </label>

        <label>
          <span className={s.labels}>Number</span>
          <input
            type="number"
            name="number"
            className={s.input}
            value={number}
            onChange={evt => setNumber(evt.target.value)}
          />
        </label>
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        className={s.button1}
        startIcon={<AddOutlinedIcon />}
      >
        Add contact
      </Button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddedContact: PropTypes.func.isRequired,
};

export default ContactForm;
