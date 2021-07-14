import React from "react";

const ContactForm = ({
  nameContacct,
  numberContact,
  onChangeNameHandler,
  onChangeNumberHandler,
  onSubmitContactFormHandler,
}) => {
  return (
    <div className="wrapperContactForm">
      <h2 className="titleContactForm">Contact form:</h2>

      <form onSubmit={onSubmitContactFormHandler}>
        <label htmlFor="" className="labelContactForm">
          {" "}
          nameContact:
          <input
            type="text"
            name="name"
            value={nameContacct}
            onChange={onChangeNameHandler}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label htmlFor="" className="labelContactForm">
          {" "}
          numberContact:
          <input
            type="tel"
            name="number"
            value={numberContact}
            onChange={onChangeNumberHandler}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit" className="js-btn-addContact">
          add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
