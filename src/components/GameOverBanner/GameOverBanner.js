import React from "react";

const GameOverBanner = ({gameState, numGuesses, answer, restartGame}) => {
  const restartButton =
    <button className="restart" onClick={restartGame}>Restart</button>;

  return (
    (gameState === 'ongoing')
    ? undefined

    : (gameState === 'win')
    ? <div className="happy banner">
        <p>
          <strong>Congratulations!</strong>{' '}
          Got it in <strong>{numGuesses} guesses</strong>.
        </p>
        {restartButton}
      </div>

    : <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        {restartButton}
      </div>
  );
};

export default GameOverBanner;

// Refactor: Move outside form, just disable input with game state
