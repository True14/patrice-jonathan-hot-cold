import React from 'react';
import './game-form.css';

export default function GameForm(props) {

  return (
    <form>
      <input type="text" name="userGuess" id="userGuess" className="text"
        maxlength="3" autocomplete="off" placeholder={props.placeholder} required />
      <input type="submit" id="guessButton" className="button" name="submit" value={props.text} />
        <p className="guess-number">Guess#{props.guess} </p>
    </form>

  );
}
