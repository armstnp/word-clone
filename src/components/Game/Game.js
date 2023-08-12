import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameOverBanner from '../GameOverBanner';

const correctGuess = (guess) =>
  guess.every((letter) => letter.status === 'correct');

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);

  const restartGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
  };

  const gameState =
    (guesses.length === 0)
    ? 'ongoing'

    : (guesses.length === NUM_OF_GUESSES_ALLOWED
        && !correctGuess(guesses[NUM_OF_GUESSES_ALLOWED - 1]))
    ? 'lose'

    : (correctGuess(guesses[guesses.length - 1]))
    ? 'win'

    : 'ongoing';

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        gameState={gameState}
        guesses={guesses}
        makeGuess={(guess) =>
          setGuesses([...guesses, checkGuess(guess, answer)])}
      />
      <GameOverBanner
        gameState={gameState}
        numGuesses={guesses.length}
        answer={answer}
        restartGame={restartGame}
      />
    </>
  );
}

export default Game;
