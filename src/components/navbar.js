import React from 'react';
import { List } from 'semantic-ui-react'
import {Link, useLocation} from "react-router-dom";
const Navbar = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div className="navbar-container">
            <List className="nav-list">
                <List.Item >
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                </List.Item>
                <List.Item>
                    <Link to="/search" className={location.pathname === '/search' ? 'active' : ''}>Szukaj</Link>
                </List.Item>
                <List.Item>
                    <Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''}>Administracja</Link>
                </List.Item>
                <List.Item>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Kontakt</Link>
                </List.Item>
                <List.Item>
                    <Link to="/help" className={location.pathname === '/help' ? 'active' : ''}>Pomoc</Link>
                </List.Item>
            </List>
        </div>
    );
}

export default Navbar;