// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarAlt, faFileAlt, faUser, faList } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
return (
    <nav className="navbar">
    <ul className="nav-menu">
    <li><Link to="/"><FontAwesomeIcon icon={faHome} className="icon" /><span>Inicio</span></Link></li>
                <li><Link to="/calendar"><FontAwesomeIcon icon={faCalendarAlt} className="icon" /><span>Calendario</span></Link></li>
                <li><Link to="/records"><FontAwesomeIcon icon={faFileAlt} className="icon" /><span>Records</span></Link></li>
                <li><Link to="/drivers"><FontAwesomeIcon icon={faUser} className="icon" /><span>Conductores</span></Link></li>
                <li><Link to="/sessions"><FontAwesomeIcon icon={faList} className="icon" /><span>Sesiones</span></Link></li>
    </ul>
    </nav>
);
};



export default Navbar;