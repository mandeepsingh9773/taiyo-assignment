import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/contactSlice';
import { v4 as uuidv4 } from 'uuid';

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState<'active' | 'inactive'>('active');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addContact({
      id: uuidv4(),
      firstName,
      lastName,
      status
    }));
    setFirstName('');
    setLastName('');
    setStatus('active');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="firstName" className="block mb-1">First Name</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block mb-1">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <span className="block mb-1">Status</span>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            value="active"
            checked={status === 'active'}
            onChange={() => setStatus('active')}
            className="form-radio"
          />
          <span className="ml-2">Active</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="inactive"
            checked={status === 'inactive'}
            onChange={() => setStatus('inactive')}
            className="form-radio"
          />
          <span className="ml-2">Inactive</span>
        </label>
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;