import React from "react";
import './Nav.css';
import logo from "../../images/Logo.jpg"

export class Nav extends React.Component 
{
    render()
    {
        return (
            <nav>
                <ul>
                    <li>
                        <a href="../../index.js">Shop</a>
                    </li>
                    <li>
                        <a href="../../index.js">Search</a>
                    </li>
                </ul>
                <img id='logo'  src={logo} alt="Logo" />
                <ul>
                    <li>
                        <a href="../../index.js">Contact</a>
                    </li>
                    <li>
                        <a href="../../index.js">About</a>
                    </li>
                </ul>
            </nav>
        )
    }
}