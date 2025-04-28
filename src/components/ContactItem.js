import React from 'react';
import '../css/ContactItem.css';

function ContactItem({ contact, deleteContact, number }) {
  return (
    <div className="contact-item">
      <p>{number}. {contact.name} - {contact.email}</p>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
}

export default ContactItem;
