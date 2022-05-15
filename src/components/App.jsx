// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from './Redux/store';
// components
import { InputForm } from './InputForm/InputForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
// styled components
import { PhonebookBox } from './Phonebook/Phonebook.styled';
import { InputFormBox } from './InputForm/InputForm.styled';
import { ContactListBox } from './ContactList/ContactList.styled';
// other libs
// import { useSubmitHandle } from './Hooks/addContact';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.items);
  const myFilter = useSelector(store => store.contacts.filter);
  // const submitHandle = useSubmitHandle();

  const filterChange = (evt) => {
    evt.preventDefault();
    dispatch(changeFilter(evt.currentTarget.value));
  }
  // const onDelete = (id) => {
  //   dispatch(removeContact(id))
  // }
  console.log('contacts in APP: ', contacts);
  const normalizedFilter = myFilter.toLowerCase();
  const filteredContacts = contacts.filter(contact => (contact.name.toLowerCase().includes(normalizedFilter)));

  return (
    <PhonebookBox>
      <InputFormBox>
        <h1>Phonebook</h1>
        <InputForm/>
      </InputFormBox>
      <ContactListBox>
        <h2>Contact List</h2>
        <Filter filter={myFilter} filterChange={filterChange}/>
        {contacts.length ?
          <ContactList contacts={filteredContacts}/> :
          <p>No any contacts</p>}
      </ContactListBox>
    </PhonebookBox>
  );
}