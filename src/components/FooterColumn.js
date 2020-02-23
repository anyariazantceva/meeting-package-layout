import React from "react";

const FooterColumn = ({title, items}) => {
    return (
        <div className='footer__column'>
            <div className="footer__title">{title}</div>
            <div className="footer__item"><a className='footer__link' href="#">{items[0]}</a></div>
            <div className="footer__item"><a className='footer__link' href="#">{items[1]}</a></div>
            <div className="footer__item"><a className='footer__link' href="#">{items[2]}</a></div>
            <div className="footer__item"><a className='footer__link' href="#">{items[3]}</a></div>
            <div className="footer__item"><a className='footer__link' href="#">{items[4]}</a></div>
        </div>
    )
};

export default FooterColumn
