import React, { useState } from "react";
import { connect } from "react-redux";
import ContactForm from "./Components/ContactForm";
import "./phonebook.scss";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./ContactList";

const PhoneBook = ({
  contacts,
  onAddContactHandler,
  onRemoveContactHandler,
}) => {
  const [nameContact, setNameContact] = useState("");
  const [numberContact, setNumberContact] = useState("");

  const changeNameHandler = (event) => {
    setNameContact(event.target.value);
  };

  const changeNumberHandler = (event) => {
    setNumberContact(event.target.value);
  };

  const submitContactFormHandler = (event) => {
    event.preventDefault();
    onAddContactHandler({
      id: uuidv4(),
      name: nameContact,
      number: numberContact,
    });
  };

  const deleteContactFormHandler = (contactID) => {
    onRemoveContactHandler(contactID);
  };

  return (
    <div className="wrapperPhonebook">
      <div className="rowPhoneBook">
        <ContactForm
          nameContact={nameContact}
          numberContact={numberContact}
          onChangeNameHandler={changeNameHandler}
          onChangeNumberHandler={changeNumberHandler}
          onSubmitContactFormHandler={submitContactFormHandler}
        />

        <ContactList
          contacts={contacts}
          onDeleteContactFormHandler={deleteContactFormHandler}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.phonebook,
});

const mapDispatchToProps = (dispatch) => ({
  onAddContactHandler: (newContact) =>
    dispatch({ type: "addContact", payload: newContact }),
  onRemoveContactHandler: (contactID) => {
    dispatch({ type: "removeContact", payload: contactID });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
