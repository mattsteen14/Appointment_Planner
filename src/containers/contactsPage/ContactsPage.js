import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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
      addContact(name, phoneNumber, email);
      setName('');
      setPhoneNumber('');
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
        <h2 
        onSubmit={handleSubmit}
        >Add Contact</h2>
        <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
        />
        <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
        contacts={contacts}
        />
      </section>
    </div>
  );
};
