

import React from 'react';
import logo from './logo.svg';
import './App.css';
import './header.css';

function Header() {
  return (
  <header className="header">
  <div className="company-name">Learn Basic to Advance</div>
  <div className="search-box">
    <input type="text" placeholder="Search..." />
    <button>Search</button>
  </div>
</header>
  );
}

export default Header;
