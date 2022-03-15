//package
import React from 'react'
//css
import './Header.css';

const Header = ({ headerIcon, header }) => {
    return (
        <div className="header">
            {React.cloneElement(headerIcon, { className: "github" })}
            <h1>{header}</h1>
        </div>
    )
}

export default Header
