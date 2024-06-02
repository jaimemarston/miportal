// src/Drivers.js
import React, { useState, useEffect } from 'react';
import UserList from './UserList';

const Drivers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the server
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default Drivers;
