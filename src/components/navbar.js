import React from 'react';
import './navbar.css';

export default function NavBar(props) {
  const links = props.links.map((link,index) => (
    <li key={index}>
    <a href={link.href}>
        {link.text}
    </a>
    </li>
  ));

  return (
    <div className="navigation-bar">
      <nav className="navigation-bar-nav">
        <ul>
          {links}
         </ul>
      </nav>
    </div>
  );
}
