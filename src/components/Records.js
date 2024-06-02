// src/components/Home.js
import React from 'react';

const runners = [
    { id: 1, name: 'Alice', lamps: '5', time: '1:10:15' },
    { id: 2, name: 'Bob', lamps: '5', time: '1:30:15' },
    { id: 3, name: 'Carol', lamps: '5', time: '1:50:15' },
    { id: 4, name: 'David', lamps: '5', time: '2:30:15' },
  ];

const getRandomColor = () => {
const letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
return color;
};

const Records = () => {
    return (
    <div className="car-list-container">
        <h2>Mejores Tiempos</h2>
        <table className="car-table">
        <thead>
        <tr>            
        <th>Ranking</th>
            <th>Conductor</th>
            <th>Vueltas</th>
            <th>Tiempo</th>
            </tr>
        </thead>
        <tbody>
            {runners.map(car => (
            <tr key={car.id}>
                <td><div className="car-name-box" style={{ backgroundColor: getRandomColor() }}>
                {car.id}</div></td>
                <td>{car.name}</td>
                <td>{car.lamps}</td>
                <td>{car.time}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    ); 
};

export default Records;