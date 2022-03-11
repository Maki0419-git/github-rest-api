import React from 'react'
import { BsGithub } from 'react-icons/bs'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <BsGithub className="github" />
            <h1 >Meoldy’s  Repositories</h1>
        </div>
    )
}

export default Header
