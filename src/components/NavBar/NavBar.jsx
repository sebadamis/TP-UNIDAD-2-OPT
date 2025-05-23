import React from 'react';
import "./NavBar.css";

import { NavLink } from 'react-router';


function NavBar() {


    return (
        <>
            <nav>
                <input id="nav-toggle" type="checkbox" />
                <div className="logo">
                    <strong className='logo-text'>SHOP</strong>
                </div>
                <ul className="links">
                    <li>
                    <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                    <NavLink to={"/Contact"}>Contact</NavLink>
                    </li>
                    <li>
                    <NavLink to={"/Login"}>Login</NavLink>
                    </li>
                    <li>
                    <NavLink to={"/registration"}>Register</NavLink>
                    </li>
                    <li>
                    <NavLink to={"/crearproducto"}>Crear Producto</NavLink>
                    </li>
                </ul>
                <label htmlFor="nav-toggle" className="icon-burger">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </label>
            </nav>

        </>
    )
}

export default NavBar