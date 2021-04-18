export default function onVisibleContacts(contacts, filter) {
  return contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase()),
  );
}

// export default function onVisibleContacts() {
//   return this.state.contacts.filter(el =>
//     el.name.toLowerCase().includes(this.state.filter.toLowerCase()),
//   );
// }
