import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactInfo, Button } from './Contact.styled';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactInfo>
        😄 {name}: {number}
      </ContactInfo>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        delete
      </Button>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
