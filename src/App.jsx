import contacts from './contact.json';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [userContacts, setUserContacts] = useState(() => {
    const savedUser = window.localStorage.getItem('saved-user');
    if (savedUser !== null) {
      return JSON.parse(savedUser);
    }
    return [...contacts];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('saved-user', JSON.stringify(userContacts));
  }, [userContacts]);

  const addContact = newContact => {
    setUserContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContact = contactId => {
    setUserContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };
  const visibleContacts = userContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
