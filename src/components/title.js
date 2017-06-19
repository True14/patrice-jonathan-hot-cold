import React from 'react';
import './title.css';

export default function Title(props) {

  return (
    <h1 class='title'>
      {props.text}
    </h1>
  );
}
