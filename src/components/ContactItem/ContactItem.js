import { ListItem, NumByOrder, TelNum, DelBtn } from "../ContactList/ContactList.styled";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from "../Redux/contactsSlice";

export function ContactItem({ contact, idx }) {
    const dispatch = useDispatch();
    return (
        <ListItem>
            <NumByOrder>{idx + 1}</NumByOrder>
            {contact.name}: <TelNum>{contact.number}</TelNum>
            <DelBtn type="button" onClick={() => dispatch(removeContact(contact.id))}>Delete</DelBtn>
        </ListItem>
    )
}
ContactItem.propTypes = {
  contact: PropTypes.object,
  idx: PropTypes.number,
}
