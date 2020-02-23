import React from 'react';
import Logo from '../assets/Logo.png';
import './Header.css';
import Languages from "./Languages";

const Header = ({ userName }) => {
    return (
        <div className='header__wrapper'>
            <header className='header container'>
                <div className="header__logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="header__right">
                    <div className="header__user">
                        User: {userName}
                    </div>
                    <Languages/>
                </div>

            </header>
        </div>
    )
};

export default Header
