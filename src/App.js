import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([
    {
      name: "Matt Steen-Brookes",
      phone: "07814 128686",
      email: "mattsteen14@me.com"
    }
  ]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    // Create new contact object.
    const newContact = {
      name,
      phone,
      email
    };
    // Update the contacts array using the previous state.
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const addAppointment = (name, contact, date, time) => {
    // Create new appointment object.
    const newAppointment = {
      name,
      contact,
      date,
      time
    };
    // Update the appointments array using the previous state.
    setAppointments(prevAppointments => [...prevAppointments, newAppointment]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage 
      contacts={contacts} 
      addContact={addContact} 
      /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ 
      <AppointmentsPage 
      appointments={appointments} 
      addAppointment={addAppointment} 
      /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
