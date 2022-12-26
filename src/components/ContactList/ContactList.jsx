import { useSelector } from 'react-redux';
import { selectVisibleContacts} from 'redux/selectors';
import { Contact } from './Contact';
import { ContactListGroup, СontactСard } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ContactListGroup>
      {contacts.map(({ id, name, phone }) => (
        <СontactСard key={id}>
          <Contact name={name} number={phone} id={id} />
        </СontactСard>
      ))}
    </ContactListGroup>
  );
};
