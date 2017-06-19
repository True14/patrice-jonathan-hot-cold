import React from 'react';
import './game-title.css';

export default function Title(props) {

  return (
    <h1 className='title'>
      {props.text}
    </h1>
  );
}
