import { Button } from 'components/Button/Button.styled';
import { Item } from './Item.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <Item contact={contact} key={contact.id}>
            <div>
              <p>
                {contact.name}: {contact.number}
              </p>
              <Button type="button" onClick={() => handleDelete(contact.id)}>
                Delete
              </Button>
            </div>
          </Item>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
