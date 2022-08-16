// export default ContactsForm;
// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import css from './ContactsForm.module.css';

// function ContactForm({ onSubmit }) {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const onChangeName = e => setName(e.currentTarget.value);
//   const onChangeNunber = e => setNumber(e.currentTarget.value);

//   const onSubmitForm = e => {
//     e.preventDefault();
//     onSubmit({ name, number });
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form onSubmit={onSubmitForm}>
//       <label className={css.label}>
//         <span className={css.title}>Name</span>
//         <input
//           className={css.input}
//           onChange={onChangeName}
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label className={css.label}>
//         <span className={css.title}>Number</span>
//         <input
//           className={css.input}
//           onChange={onChangeNunber}
//           type="tel"
//           name="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>
//       <button className={css.button} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }

// ContactForm.prototype = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default ContactForm;
import { useState } from 'react';
import { Label, Title, Input, Button } from './ContactsForm.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from 'redux/contacts-slice';

function ContactsForm({ onClose }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeNunber = e => setNumber(e.currentTarget.value);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();

    const newElement = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name)
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK'
        )
      : dispatch(addContact(newElement));

    reset();
    onClose();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Label>
        <Title>Name</Title>
        <Input
          onChange={onChangeName}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <Title>Number</Title>
        <Input
          onChange={onChangeNunber}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </form>
  );
}

export default ContactsForm;
