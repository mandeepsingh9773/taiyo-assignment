import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-5">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Contacts
            </Link>
          </li>
          <li>
            <Link to="/charts-and-maps" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Charts and Maps
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;