import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
const Nav = (() => {
    return (
        <nav className="navbar navbar-expand-sm">
            <Link className="navbar-brand" to="/">
                <img src={Logo} alt='Football Leagues' />
            </Link>
        </nav>

    )
})

export default Nav