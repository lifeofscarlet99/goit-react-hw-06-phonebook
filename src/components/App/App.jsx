// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// import ContactForm from './ContactsForm/ContactsForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import Message from './Message/Message';
// import css from '../App/App.module.css';

// function App() {
//   const [contacts, setContacts] = useState([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]);
//   const [filter, setFilter] = useState(' ');
//   // const [name, setName] = useState('');
//   // const [number, setNumber] = useState('');

//   useEffect(() => {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     parsedContacts ? setContacts(parsedContacts) : setContacts([]);
//   }, []);
//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = ({ name, number }) => {
//     const newContact = { id: nanoid(), name, number };

//     contacts.some(contact => contact.name === name)
//       ? Report.warning(
//           `${name}`,
//           'This user is already in the contact list.',
//           'OK'
//         )
//       : setContacts(prevContacts => [newContact, ...prevContacts]);
//   };

//   const deleteContact = contactId => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== contactId)
//     );
//   };

//   const changeFilter = e => setFilter(e.currentTarget.value);

//   const filtredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>
//         Phone<span className={css.title__color}>book</span>
//       </h1>
//       <ContactForm onSubmit={addContact} />

//       <h2 className={css.subtitle}>Contacts</h2>
//       <Filter filter={filter} changeFilter={changeFilter} />
//       {contacts.length > 0 ? (
//         <ContactList
//           contacts={filtredContacts()}
//           onDeleteContact={deleteContact}
//         />
//       ) : (
//         <Message text="Contact list is empty." />
//       )}
//     </div>
//   );
// }

// export default App;

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts-slice';
import Container from '../App/Container';
import Header from '../App/Header';
import ContactList from '../App/ContactList';
import Filter from '../App/Filter';
import Message from '../App/Message';

function App() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container title="Contacts">
        <Filter />
        {contacts.length > 0 ? <ContactList /> : <Message />}
      </Container>
    </>
  );
}

export default App;
