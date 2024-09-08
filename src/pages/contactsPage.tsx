import React from "react";
import ContactForm from "../components/contactForm";
import ContactList from "../components/contactList";

const ContactsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Add New Contact</h2>
          <ContactForm />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact List</h2>
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
