import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";
import { FcSalesPerformance } from 'react-icons/fc';

const Menu = () => {
    return (
        <div className="menu-div">
            <h1><FcSalesPerformance className="icon" /> Sales Tracker</h1>
            <ul>
                <li className='nav-links'>
                    <Link to="/">Home</Link>
                </li>
                <li className='nav-links'>
                    <Link to="/sales">Sales</Link>
                </li>
                <li className='nav-links'>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;