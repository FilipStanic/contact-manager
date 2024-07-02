import { useState } from 'react';
import ContactForm from './ContactForm.jsx';
import ContactList from './ContactList.jsx';


const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <>
      <div className='min-h-screen bg-gray-900 items-center justify-center flex flex-col'>
        <h1 className='text-white font-bold text-3xl mb-3'>Contact Creator</h1>
        <ContactForm addContact={addContact} />
        <ContactList contacts={contacts} onDeleteContact={deleteContact} />
      </div>
    </>
  )
}

export default App
