import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updateContact, deleteContact } from '../store/contactSlice';
import { Contact } from '../types/contact';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Contact | null>(null);

  const handleEdit = (contact: Contact) => {
    setEditingId(contact.id);
    setEditForm(contact);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  const handleSave = () => {
    if (editForm) {
      dispatch(updateContact(editForm));
      setEditingId(null);
      setEditForm(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editForm) {
      setEditForm({
        ...editForm,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div key={contact.id} className="p-4 border rounded">
          {editingId === contact.id ? (
            <div className="space-y-2">
              <input
                type="text"
                name="firstName"
                value={editForm?.firstName || ''}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="lastName"
                value={editForm?.lastName || ''}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <div>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    checked={editForm?.status === 'active'}
                    onChange={() => setEditForm(prev => prev ? {...prev, status: 'active'} : null)}
                    className="form-radio"
                  />
                  <span className="ml-2">Active</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="inactive"
                    checked={editForm?.status === 'inactive'}
                    onChange={() => setEditForm(prev => prev ? {...prev, status: 'inactive'} : null)}
                    className="form-radio"
                  />
                  <span className="ml-2">Inactive</span>
                </label>
              </div>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-bold">{`${contact.firstName} ${contact.lastName}`}</h3>
              <p>Status: {contact.status}</p>
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => handleEdit(contact)}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactList;