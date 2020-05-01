import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active">Главная</NavLink>
                        <NavLink to="/favorites" activeClassName="active">Любимые</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;