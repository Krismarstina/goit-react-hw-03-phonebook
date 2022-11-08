import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsButton,
  ContactItem,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            {name}: {number}
            <ContactsButton onClick={() => onDelete(id)} type="button">
              Delete
            </ContactsButton>
          </ContactItem>
        );
      })}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
