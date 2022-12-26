import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchContacts} from '../redux/operations'
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <>
      <Section headTitle="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
