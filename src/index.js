import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
const links = [{
  text: 'WHAT?',
  href: '#'
},{
  text: '+NEW Game',
  href: '#'
}];
ReactDOM.render(<NavBar links={links} />, document.getElementById('root'));
registerServiceWorker();
