import { toast } from 'react-toastify';

export default function onDeleteContactItem({ id, name }, setContacts) {
  toast.success(`Contact "${name}" successfully deleted`);
  setContacts(prevState => prevState.filter(el => el.id !== id));
}

// export default function onDeleteContactItem({ id, name }) {
//   toast.success(`Contact "${name}" successfully deleted`);
//   this.setState(prevState => {
//     return {
//       contacts: prevState.contacts.filter(el => el.id !== id),
//     };
//   });
// }
