import { useSelector } from 'react-redux';
// components
import { InputForm } from './InputForm/InputForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
// styled components
import { PhonebookBox } from './Phonebook/Phonebook.styled';
import { InputFormBox } from './InputForm/InputForm.styled';
import { ContactListBox } from './ContactList/ContactList.styled';

export function App() {
  const contacts = useSelector(store => store.contacts.items);
  const myFilter = useSelector(store => store.contacts.filter);
 
  const normalizedFilter = myFilter.toLowerCase();
  const filteredContacts = contacts.filter(contact => (contact.name.toLowerCase().includes(normalizedFilter)));

  return (
    <PhonebookBox>
      <InputFormBox>
        <h1 style={{textAlign: 'center'}}>Phonebook</h1>
        <InputForm/>
      </InputFormBox>
      <ContactListBox>
        <Filter/>
        <h2 style={{textAlign: 'center'}}>Contact List</h2>
        {contacts.length ?
          <ContactList contacts={filteredContacts}/> :
          <p>No any contacts</p>}
      </ContactListBox>
    </PhonebookBox>
  );
}