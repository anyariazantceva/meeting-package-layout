import React from 'react';
import Logo from "../assets/Logo.png";
import FooterColumn from "./FooterColumn";
import './Footer.css'

const arrayOne = ['Hotel Chains', 'Independent Hotels', 'Partners', 'Unique Venues and Event Spaces'];
const arrayTwo = ['Online Booking Engine', 'Global Distribution System', 'Sales & Catering', 'Integrations', 'Analytics'];
const arrayThree = ['Company', 'Contact'];

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer container">
                <div className="footer__logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="footer__links">
                    <FooterColumn title='Solutions' items={arrayOne} />
                    <FooterColumn title='Products' items={arrayTwo}/>
                    <FooterColumn title='More' items={arrayThree}/>
                </div>
            </div>

        </footer>
    )
};

export default Footer
