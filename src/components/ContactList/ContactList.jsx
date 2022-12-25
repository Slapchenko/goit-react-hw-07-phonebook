import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { getVisibleContacts } from '../../helpers/visibleContacts';
import { Contact } from './Contact';
import { ContactListGroup, СontactСard } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ContactListGroup>
      {visibleContacts.map(({ id, name, number }) => (
        <СontactСard key={id}>
          <Contact name={name} number={number} id={id} />
        </СontactСard>
      ))}
    </ContactListGroup>
  );
};

