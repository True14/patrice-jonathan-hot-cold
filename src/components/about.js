import React from 'react';
import './about.css';

export default function Aboutpg(props) {
  const info = props.steps.map((info, index) => (
    <li key={index}>
      {info.text}
    </li>
  ));

  return(
    <div className="overlay">
    <h3> {props.title}</h3>
      <div className="content">
        {props.intro}
      <ul>
        {info}
      </ul>
        {props.outro}
      <button> "Got it!"</button>
      </div>
    </div>
  );
}
