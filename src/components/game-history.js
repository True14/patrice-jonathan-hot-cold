import React from 'react';
import './game-history.css';

export default function GameHistory(props) {
  const links = props.links.map((link,index) => (
    <li key={index}>
        {link.text}
    </li>
  ));

  return (
        <ul className="game-history">
          {links}
         </ul>
  );
}
