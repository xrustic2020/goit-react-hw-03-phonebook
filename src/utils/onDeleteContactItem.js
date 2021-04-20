import { toast } from 'react-toastify';

export default function onDeleteContactItem({ id, name }, setContacts) {
  toast.success(`Contact "${name}" successfully deleted`);
  setContacts(prevState => prevState.filter(el => el.id !== id));
}
