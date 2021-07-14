import React, { useState } from "react";
import ContactItem from "./Components/ContactItem";
import Filter from "./Components/Filter";

const ContactList = ({ contacts, onDeleteContactFormHandler }) => {
  const [filter, setFilter] = useState("");

  const filterChangeHandler = (event) => {
    setFilter(event.target.value);
  };

  const filterContacts = () => {
    return contacts.filter((contact) => contact.name.includes(filter));
  };

  const filteredContasts = filterContacts();
  return (
    <div className="wrapperContactList">
      <Filter filter={filter} onFilterChangeHandler={filterChangeHandler} />

      <h2 className="titleContactList">Contact List:</h2>
      {filteredContasts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContactFormHandler={onDeleteContactFormHandler}
        />
      ))}
    </div>
  );
};

export default ContactList;
