import React from 'react';
import '../style/Navbar.css';
import { Link } from 'react-router-dom'; 
const Navbar = () => {
    return (
        <div className='navbar-style'>
           <div className='navbar-gap'>
                <Link to="/" className='navbar-button'>Home</Link>
                <div className='navbar-button'>MENU</div>
            </div>
            <div className='navbar-gap'>
                <div to="/profile" className='navbar-button'>MY PAGE</div>
            </div>
        </div>
    );
};

export default Navbar;