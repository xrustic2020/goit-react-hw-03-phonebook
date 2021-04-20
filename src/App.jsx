import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import ContactForm from 'components/Contacts/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/Contacts/ContactList';
import Container from 'components/Container';
import Section from 'components/Section';

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

  const addedContact = newContact => {
    const { name, number } = newContact;

    setContacts(prevState => {
      const contactFound = prevState.find(el => el.name === name);
      if (contactFound) {
        toast.warn(`"${name}" is already in contacts`);
        setFilter(name);
        return prevState;
      } else if (!name) {
        toast.error('the "Name" field must contain the name of the contact');
        return prevState;
      } else if (!number) {
        toast.error('the "Number" field must contain the contact number');
        return prevState;
      }

      toast.success(
        `Contact "${name}" with number "${number}" has been successfully created`,
      );
      return [...prevState, newContact];
    });
  };

  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onAddedContact={addedContact} />
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
            contacts={visibleContacts}
          />
        </div>
      </Section>
      <ToastContainer />
    </Container>
  );
};

export default App;
