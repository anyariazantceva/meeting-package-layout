import React from 'react';

const Languages = () => {
    return (
        <div className="header__languages">
            <select name="languages" className="header__select">
                <option value="">Language</option>
                <option value="English">English</option>
                <option value="Finnish">Finnish</option>
                <option value="Swedish">Swedish</option>
            </select>
        </div>
    )
};

export default Languages
