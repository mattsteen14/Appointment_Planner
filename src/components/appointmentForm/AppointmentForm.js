import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Appointment Name"
            value={name}
            onChange={(e) => setTitle(e.target.value)}
            aria-label="Appointment Name"
            required
          />
        </label>
        <br />
        <label>
          <ContactPicker
            name="contact"
            value={contact}
            contacts={contactNames}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <br />
        <label>
        <input
          type="date"
          name="date"
          placeholder="Date Picker"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()} //Set min attribute using getTodayString()
          aria-label="Date Picker"
          required
        />
        </label>
        <br />
        <label>
        <input
          type="time"
          name="time"
          placeholder="Time Picker"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          aria-label="Time Picker"
          required
        />
        </label>
        <br />
        <input 
        aria-label="Add Appointment" 
        type="submit" 
        value="Add Appointment" 
        />
      </form>
    </div>
  );
};
