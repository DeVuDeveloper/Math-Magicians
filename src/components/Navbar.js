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
      navigation: 'Quotes',
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
                paddingBottom: isActive ? '10px' : '5px',
                borderBottom: isActive ? '3px solid #fbeec1' : '2px solid #376e6f',
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
