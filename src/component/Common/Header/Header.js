//package
import React from 'react'
//css
import './Header.css';


// <BsGithub className="github" />
// <h1 >Meoldy’s  Repositories</h1>
const Header = ({ headerIcon, header }) => {
    return (
        <div className="header">
            {React.cloneElement(headerIcon, { className: "github" })}
            <h1>{header}</h1>
        </div>
    )
}

export default Header
