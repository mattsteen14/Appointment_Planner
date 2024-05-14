import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);
  // useEffect hook to check for duplicates whenever the name state variable changes.
  useEffect(() => {
    const isNameDuplicate = contacts.some(contact => contact.name === name);
    setIsDuplicate(isNameDuplicate);
  }, [name, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    } else {
      alert("Duplicate name detected! Please enter a different name.");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
        {isDuplicate && 
        <p>Duplicate name detected!</p>}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
        items={contacts}
        />
      </section>
    </div>
  );
};
