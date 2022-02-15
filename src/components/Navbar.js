import { NavLink } from 'react-router-dom';
import React from 'react';
import '../BasicStyle/Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      navigation: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      navigation: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      navigation: 'Quote',
    },
  ];

  return (
    <nav className="navbar">
      <h1 className="header">Math Magicians</h1>
      <ul className="link-list">
        {links.map((link) => (
          <li key={link.id} className="link">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}
              to={link.path}
              className="link"
              activeclassname="active"
              exact="true"
            >
              {link.navigation}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
