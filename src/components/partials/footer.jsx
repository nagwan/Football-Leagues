import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
const Footer = (() => {
    return (
        <div className="footer w-100 d-flex justify-content-end">
            <Link className="navbar-brand" to="/">
                <img src={Logo} alt='Football Leagues' />
            </Link>
        </div>

    )
})

export default Footer