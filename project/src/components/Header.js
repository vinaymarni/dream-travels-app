import React from 'react';
import '../styles/header.css';

import airplane from '../images/airplane.png';
import Menu from './Menu';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const handleClick = (e) => {
        const shouldPrevent = location.pathname === "/";
        if (shouldPrevent) {
          e.preventDefault();
        }
    };

    return (
        <div className="headerMainCon">
            <Link className='logoContainer' to="/" onClick={handleClick}>
                <img src={airplane} alt="Logo" />
                <span>Dream Travels</span>
            </Link>

            <Menu />
        </div>
    )
};

export default Header;