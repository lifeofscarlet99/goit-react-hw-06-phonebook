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
