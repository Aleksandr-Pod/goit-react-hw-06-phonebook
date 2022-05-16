import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../Redux/contactsSlice';

export const Filter = () => {
  const myFilter = useSelector(store => store.contacts.filter);
  const dispatch = useDispatch();
    return (<div>
      <h3>Find contacts by name</h3>
        <input
          type="text"
          value={myFilter}
          onChange={evt => dispatch(changeFilter(evt.currentTarget.value))} />
        </div>
    )
}