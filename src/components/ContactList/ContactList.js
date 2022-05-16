import { ContactItem } from "../ContactItem/ContactItem";
import PropTypes from 'prop-types';

export function ContactList({ contacts }) {
    return (
        <>
            {contacts.map((contact, idx) => (
                <ContactItem key={contact.id} contact={contact} idx={idx}/>
            ))}
        </>
    )
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
}
