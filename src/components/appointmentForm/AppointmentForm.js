import React from "react";
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={e => setDate(e.target.value)}
          min={getTodayString()} //Set min attribute using getTodayString()
        />
        <input
          type="text"
          placeholder="Time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </form>
      <ContactPicker
        contacts={contacts}
      />
      <button
        type="submit"
        disabled
        aria-label="Submit Form"
        title="Submit Form"
      >
        Submit
      </button>
    </div>
  );
};
