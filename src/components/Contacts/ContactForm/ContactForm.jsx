// import IconButton from '@material-ui/core/IconButton';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';

import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

import handleInput from 'utils/handleInput';
import handleSubmit from './handleSubmit.js';

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

// const classes = useStyles();

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = handleInput.bind(this);
  handleSubmit = handleSubmit.bind(this);

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <div className={s.overlay}>
          <label>
            <span className={s.labels}>Name</span>
            <input
              type="text"
              name="name"
              className={s.input}
              value={this.state.name}
              onChange={this.handleInput}
            />
          </label>

          <label>
            <span className={s.labels}>Number</span>
            <input
              type="number"
              name="number"
              className={s.input}
              value={this.state.number}
              onChange={this.handleInput}
            />
          </label>
        </div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={s.button1}
          startIcon={<AddOutlinedIcon />}
        >
          Add contact
        </Button>
        {/* <button type="submit" className={s.button} disabled={!this.state.name}>
          Add contact
        </button> */}
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddedContact: PropTypes.func.isRequired,
};

export default ContactForm;
