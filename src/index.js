import React from 'react';
import ReactDOM from 'react-dom';
import Aboutpg from './components/about';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
const links = [{
  text: 'WHAT?',
  href: '#'
},{
  text: '+NEW Game',
  href: '#'
}];

const steps = [
  {
    text: 'Stuff'
  },
  {
    text: 'Stuff2'
  },
  {
    text: 'Stuff3'
  }];


const intro = "This is a Hot or Cold Number Guessing Game. The game goes like this:";
const outro = "So, Are you ready?";
// ReactDOM.render(<NavBar links={links} />, document.getElementById('root'));
// registerServiceWorker();
ReactDOM.render(<Aboutpg title="What do I do" steps={steps} intro={intro} outro={outro} />, document.getElementById('root'));
 registerServiceWorker();

// ReactDOM.render(<h1> "Hello World" </h1>, document.getElementById('root'));
//  registerServiceWorker();
