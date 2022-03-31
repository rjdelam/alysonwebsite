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
                        <a href="#">Shop</a>
                    </li>
                    <li>
                        <a href="#">Search</a>
                    </li>
                </ul>
                <img id='logo'  src={logo} />
                <ul>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </nav>
        )
    }
}