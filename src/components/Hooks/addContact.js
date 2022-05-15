import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../Redux/store';

export const useSubmitHandle = (data) => {
  const { contacts } = useSelector(store => store.contacts);

  console.log('contacts:', contacts);
  console.log('data', data);

  const dispatch = useDispatch();
  if (!contacts) return;

  const equalName = contacts.items.find(el => (el.name.toLowerCase() === data.name.toLowerCase()));
  if (equalName) return alert(equalName.name + " is already in contacts");

  data.id = nanoid();
  dispatch(addContact(data));
  }