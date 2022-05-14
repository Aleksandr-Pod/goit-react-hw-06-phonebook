import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../Redux/store';

export const useSubmitHandle = (data) => {
    const { contacts } = useSelector(store => store.contacts);
    console.log('contacts:', contacts);
    const dispatch = useDispatch();

    const equalName = contacts.find(el => (el.name.toLowerCase() === data.name.toLowerCase()));
    if (equalName) return alert(equalName.name + " is already in contacts");
    data.id = nanoid();
    dispatch(addContact(data));
  }