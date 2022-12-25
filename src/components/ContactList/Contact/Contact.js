import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { ContactInfo, Button } from './Contact.styled';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactInfo>
        😄 {name}: {number}
      </ContactInfo>
      <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
        delete
      </Button>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};
