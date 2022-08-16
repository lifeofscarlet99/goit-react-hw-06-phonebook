// import PropTypes from 'prop-types';
// import Contact from '../Contact';
// import css from './ContactList.module.css';

// function ContactList({ contacts, onDeleteContact }) {
//   return (
//     <ul>
//       {contacts.map(({ id, name, number }) => {
//         return (
//           <li className={css.item} key={id}>
//             <Contact
//               name={name}
//               number={number}
//               onDeleteContact={() => onDeleteContact(id)}
//               contactId={id}
//             />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// ContactList.prototype = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// export default ContactList;
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getFilter, getContacts } from 'redux/contacts-slice';
import Contact from '../Contact/Contact';
import { Item } from './ContactList.styled';

function ContactList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const deleteSelectedContact = contactId => dispatch(deleteContact(contactId));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <ul>
      {filteredContactList.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={() => deleteSelectedContact(id)}
              contactId={id}
            />
          </Item>
        );
      })}
    </ul>
  );
}

export default ContactList;
