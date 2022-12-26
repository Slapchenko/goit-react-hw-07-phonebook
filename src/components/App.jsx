import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchContacts} from '../redux/operations'
import { getError, getIsLoading } from "../redux/selectors";
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { Loader } from './Loader';
import { ContactList } from './ContactList';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  
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
        {isLoading && !error && <Loader />}
      </Section>
    </>
  );
}
