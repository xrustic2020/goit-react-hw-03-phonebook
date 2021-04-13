import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';

export default function addContact(name, number) {
  const contactItem = {
    id: uuid().slice(30),
    name,
    number,
  };

  this.setState(prevState => {
    const contactFound = prevState.contacts.find(el => el.name === name);
    if (contactFound) {
      toast.warn(`"${name}" is already in contacts`);
      return {
        filter: name,
      };
    } else if (!name) {
      toast.error('the "Name" field must contain the name of the contact');
      return;
    } else if (!number) {
      toast.error('the "Number" field must contain the contact number');
      return;
    }
    toast.success(
      `Contact "${name}" with number "${number}" has been successfully created`,
    );
    return {
      contacts: [...prevState.contacts, contactItem],
    };
  });
}
