import React from "react";
import Keyboard from "../Keyboard";

function GuessInput({gameState, guesses, makeGuess}) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        makeGuess(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>

      {
        gameState === 'ongoing'
        ? <>
            <input
              id="guess-input"
              type="text"
              title="five-letter word"
              minLength={5}
              maxLength={5}
              pattern="[a-zA-Z]{5}"
              value={guess}
              onChange={(event) => setGuess(event.target.value.toUpperCase())}
            />
            <Keyboard guesses={guesses} />
          </>
        : undefined
      }
    </form>
  );
}

export default GuessInput;
