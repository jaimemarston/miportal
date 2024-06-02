// src/UserForm.js
import React, { useState } from 'react';

const Drivers = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();
const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, email }),
});
if (response.ok) {
    alert('User created successfully!');
    setUsername('');
    setPassword('');
    setEmail('');
} else {
    alert('Failed to create user.');
}
};

return (
<form onSubmit={handleSubmit}>
    <div>
    <label>Username:</label>
    <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
    />
    </div>
    <div>
    <label>Password:</label>
    <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
    />
    </div>
    <div>
    <label>Email:</label>
    <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
    />
    </div>
    <button type="submit">Create User</button>
</form>
);
};

export default Drivers;
