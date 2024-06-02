// src/Drivers.js
import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const Drivers = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Fetch users from the server
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleCreateUser = async (user) => {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const newUser = await response.json();
      setUsers([...users, newUser]);
    } else {
      alert('Failed to create user.');
    }
  };

  const handleEditUser = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
  };

  const handleDeleteUser = async (userId) => {
    const response = await fetch(`http://localhost:3000/users/${userId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setUsers(users.filter((user) => user.id !== userId));
    } else {
      alert('Failed to delete user.');
    }
  };

  return (
    <div>
      {isEditing ? (
        <UserForm onSubmit={handleCreateUser} />
      ) : (
        <button onClick={() => setIsEditing(true)}>New User</button>
      )}
      <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
    </div>
  );
};

export default Drivers;
