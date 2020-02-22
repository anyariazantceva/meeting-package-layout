import React from 'react';
import Logo from '../assets/Logo.png';
import './Header.css';

const Header = ({ userName }) => {
    return (
        <header className='header'>
            <div className="header__logo">
                <img src={Logo} alt=""/>
            </div>
            <div className="header__user">
                {userName}
            </div>
            <div className="header__languages">
                <select name="languages" className="ui dropdown">
                    <option value="">Language</option>
                    <option value="English">English</option>
                    <option value="Finnish">Finnish</option>
                    <option value="Swedish">Swedish</option>
                </select>
            </div>
        </header>
    )
};

export default Header
