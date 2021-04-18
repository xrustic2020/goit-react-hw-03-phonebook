import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Button from '@material-ui/core/Button';
import 'react-toastify/dist/ReactToastify.css';

// import { useEffect } from 'react';

import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

// import handleInput from 'utils/handleInput';
// import handleSubmit from './handleSubmit.js';

const ContactForm = ({ onAddedContact, setContacts, setFilter }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onAddedContact(name, number, setContacts, setFilter);
    setContacts('');
    setFilter('');
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
  setContacts: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default ContactForm;

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleInput = handleInput.bind(this);
//   handleSubmit = handleSubmit.bind(this);

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={s.form}>
//         <div className={s.overlay}>
//           <label>
//             <span className={s.labels}>Name</span>
//             <input
//               type="text"
//               name="name"
//               className={s.input}
//               value={this.state.name}
//               onChange={this.handleInput}
//             />
//           </label>

//           <label>
//             <span className={s.labels}>Number</span>
//             <input
//               type="number"
//               name="number"
//               className={s.input}
//               value={this.state.number}
//               onChange={this.handleInput}
//             />
//           </label>
//         </div>
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           size="small"
//           className={s.button1}
//           startIcon={<AddOutlinedIcon />}
//         >
//           Add contact
//         </Button>
//       </form>
//     );
//   }
// }
