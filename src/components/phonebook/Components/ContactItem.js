import React from "react";

const ContactItem = ({ id, name, number, onDeleteContactFormHandler }) => {
  const handleCloseContact = () => {
    onDeleteContactFormHandler(id);
  };

  return (
    <div className="wrapperContactItem">
      <h2 className="titleNameContact">{name}</h2>
      <span className="descriptionNumberContact">{number}</span>

      <button className="js-btn-deleteContact" onClick={handleCloseContact}>
        X
      </button>
    </div>
  );
};

export default ContactItem;
