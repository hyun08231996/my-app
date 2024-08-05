// components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Website Name</h2>
      <ul>
        <li className="nav-item">
          <NavLink end to="/" activeclassname="active">
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/music" activeclassname="active">
            Music Library
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/analytics" activeclassname="active">
            Analytics
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;