import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { getVisibleContacts } from '../../helpers/visibleContacts';
import { Contact } from './Contact';
import { ContactListGroup, СontactСard } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ContactListGroup>
      {visibleContacts.map(({ id, name, phone }) => (
        <СontactСard key={id}>
          <Contact name={name} number={phone} id={id} />
        </СontactСard>
      ))}
    </ContactListGroup>
  );
};

