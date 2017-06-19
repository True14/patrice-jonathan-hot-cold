import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import Title from './components/title';
import GameTitle from './components/game-title';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
const links = [{
  text: 'WHAT?',
  href: '#'
},{
  text: '+NEW Game',
  href: '#'
}];
ReactDOM.render(<div>
                 <NavBar links={links} />
                 <Title text='HOT or COLD' />
                 <section className="game">
                  <GameTitle text="Make your Guess" />
                 </section>
                </div>, document.getElementById('root'));
registerServiceWorker();
