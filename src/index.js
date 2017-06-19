import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import Title from './components/title';
import GameTitle from './components/game-title';
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
ReactDOM.render(<div>
                 <NavBar links={links} />
                 <Title text='HOT or COLD' />
                 <section className="game">
                  <GameTitle text="Make your Guess" />
                 </section>
                </div>, document.getElementById('root'));
registerServiceWorker();
