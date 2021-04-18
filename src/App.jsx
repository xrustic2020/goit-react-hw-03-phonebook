import { useEffect, useState } from 'react'; // del Component
import { ToastContainer } from 'react-toastify';

import ContactForm from 'components/Contacts/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/Contacts/ContactList';
import Container from 'components/Container';
import Section from 'components/Section';

import addContact from 'utils/addContact';
import resetFilter from 'utils/resetFilter';
import onDeleteContactItem from 'utils/onDeleteContactItem';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(defaultContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const dataContacts = localStorage.getItem('contacts');
    if (dataContacts) setContacts(JSON.parse(dataContacts));
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm
          onAddedContact={addContact}
          setContacts={setContacts}
          setFilter={setFilter}
        />
      </Section>

      <Section title="Contacts">
        <div>
          <Filter
            searchQuery={filter}
            onSetFilter={setFilter}
            onReset={resetFilter}
          />

          <ContactList
            deleteContactItem={onDeleteContactItem}
            setContacts={setContacts}
            contacts={contacts}
            filter={filter}
          />
        </div>
      </Section>
      <ToastContainer />
    </Container>
  );
};

// export default class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   handleInput = handleInput.bind(this);
//   addContact = addContact.bind(this);
//   resetFilter = resetFilter.bind(this);
//   onDeleteContactItem = onDeleteContactItem.bind(this);
//   onVisibleContacts = onVisibleContacts.bind(this);

//   componentDidMount() {
//     const dataContacts = localStorage.getItem('contacts');
//     if (dataContacts) this.setState({ contacts: JSON.parse(dataContacts) });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     return (
//       <Container>
//         <Section title="Phonebook">
//           <ContactForm onAddedContact={this.addContact} />
//         </Section>

//         <Section title="Contacts">
//           <div>
//             <Filter
//               searchFilter={this.state.filter}
//               handler={this.handleInput}
//               reset={this.resetFilter}
//             />

//             <ContactList
//               visible={this.onVisibleContacts}
//               deleteContactItem={this.onDeleteContactItem}
//             />
//           </div>
//         </Section>
//         <ToastContainer />
//       </Container>
//     );
//   }
// }

export default App;
