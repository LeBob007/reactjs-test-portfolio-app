import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink to="/" exact activeClassName="is-active">Home</NavLink>
        <NavLink to="/portfolio" exact activeClassName="is-active">Portfolio</NavLink>
        <NavLink to="/contact" exact activeClassName="is-active">Contact</NavLink>
    </header>
)

export default Header