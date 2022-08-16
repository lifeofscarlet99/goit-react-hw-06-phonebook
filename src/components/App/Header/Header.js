import { Title, TitleColor } from './Header.styled';

import ContactForm from '../ContactsForm/ContactsForm';
import { addContact } from 'redux/contacts-slice';

function Header() {
  return (
    <>
      <Title>
        Phone<TitleColor>book</TitleColor>
      </Title>

      <ContactForm onSubmit={addContact} />
    </>
  );
}

export default Header;
