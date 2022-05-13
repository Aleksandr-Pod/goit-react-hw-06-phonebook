import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact, changeFilter } from './Store/store';
// components
import { InputForm } from './InputForm/InputForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
// styled components
import { PhonebookBox } from './Phonebook/Phonebook.styled';
import { InputFormBox } from './InputForm/InputForm.styled';
import { ContactListBox } from './ContactList/ContactList.styled';
// other libs
import { nanoid } from 'nanoid';

export function App() {
  // const [contacts, setContacts] = useState(() => 
  //   JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts]);

  const submitHandle = (data) => {
    const equalName = contacts.find(el => (el.name.toLowerCase() === data.name.toLowerCase()));
    if (equalName) return alert(equalName.name + " is already in contacts");
    
    data.id = nanoid();
    dispatch(addContact(data))
    // setContacts(contacts => [data, ...contacts])
  }
  const filterChange = (evt) => {
    evt.preventDefault();
    dispatch(changeFilter(evt.currentTarget.value));
    // setFilter(evt.currentTarget.value);
  }
  const onDelete = (id) => {
    dispatch(removeContact(id))
    // setContacts(contacts => contacts.filter(contact => contact.id !== id))
  }
  
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact => (contact.name.toLowerCase().includes(normalizedFilter)));

  return (
    <PhonebookBox>
      <InputFormBox>
        <h1>Phonebook</h1>
        <InputForm submitHandle={submitHandle}/>
      </InputFormBox>
      <ContactListBox>
        <h2>Contact List</h2>
        <Filter filter={filter} filterChange={filterChange}/>
        {contacts.length ?
          <ContactList contacts={filteredContacts} onDelete={onDelete} /> :
          <p>No any contacts</p>}
      </ContactListBox>
    </PhonebookBox>
  );
}