import addContact from 'utils/addContact';

export default function handleSubmit(
  evt,
  onAddedContact,
  setContacts,
  setFilter,
) {
  evt.preventDefault();
  const name = evt.target[0].value;
  const number = evt.target[1].value;
  addContact(name, number);
  // setContacts('');
  // setFilter('');
}

// export default function handleSubmit(evt) {
//   evt.preventDefault();
//   this.props.onAddedContact(this.state.name, this.state.number);
//   this.setState({
//     name: '',
//     number: '',
//   });
// }
