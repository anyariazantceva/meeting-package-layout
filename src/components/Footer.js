import React from 'react';
import Logo from "../assets/Logo.png";
import FooterColumn from "./FooterColumn";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="app-footer footer">
            <div className="footer__logo">
                <img src={Logo} alt=""/>
            </div>
            <div className="footer__links">
                <FooterColumn/>
                <FooterColumn/>
                <FooterColumn/>
            </div>
        </footer>
    )
}

export default Footer
