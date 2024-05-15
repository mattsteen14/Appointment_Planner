import React from "react";

export const ContactPicker = ({
  contacts,
  onChange,
  value,
  name
}) => {
  if (!contacts || contacts.length === 0) {
    return <option
      value=""
    >
      No Contact Selected
    </option>
  }
  return (
    <div>
      <select
        onChange={onChange}
        value={value}
        name={name}
      >
        {contacts.map(contact => (
          <option
            key={contact}
            value={contact}
          >
            {contact}
          </option>
        ))}
      </select>
    </div>
  );
};
