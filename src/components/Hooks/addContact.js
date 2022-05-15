// import { useSelector, useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
// import { addContact } from '../Redux/store';

// export const useSubmitHandle = (data) => {
//   const { contacts } = useSelector(store => store.contacts);
//   const dispatch = useDispatch();

// // проверка на идентичность имён
//   const equalName = contacts.items.find(el => (el.name.toLowerCase() === data.name.toLowerCase()));
//   if (equalName) return alert(equalName.name + " is already in contacts");
//   if (!data) return;

//   data.id = nanoid();
//   dispatch(addContact(data));
//   }