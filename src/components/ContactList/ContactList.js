import { ContactItem } from "../ContactItem/ContactItem";
import PropTypes from 'prop-types';

export function ContactList({ contacts }) {
    return (
        <><h2 style={{ textAlign: 'center' }}>Contact List</h2>
            {contacts.length ?
                contacts.map((contact, idx) => (
                    <ContactItem key={contact.id} contact={contact} idx={idx} />
                ))
                : <p>No any contacts</p>}
        </>
    )
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
}