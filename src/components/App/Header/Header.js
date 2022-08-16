// import { useState } from 'react';
import { Title, TitleColor } from './Header.styled';
// import { BsFillPersonPlusFill } from 'react-icons/bs';
// import Modal from '../Modal/Modal';
import ContactForm from '../ContactsForm/ContactsForm';
import { addContact } from 'redux/contacts-slice';

function Header() {
  // const [showModal, setShowModal] = useState(false);

  // const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  return (
    <>
      <Title>
        Phone<TitleColor>book</TitleColor>
      </Title>
      {/* <Button type="button" onClick={toggleModal}>
        <ButtonText>Add new contact</ButtonText>
        <BsFillPersonPlusFill size={20} />
      </Button>

      {showModal && (
        <Modal onClose={toggleModal}> */}
      <ContactForm onSubmit={addContact} />
      {/* </Modal> */}
      {/* )} */}
    </>
  );
}

export default Header;
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
