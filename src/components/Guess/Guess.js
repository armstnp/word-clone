import React from "react";
import { range } from "../../utils";

const defaultGuess = new Array(5).fill({letter: '', status: ''});

const Guess = ({guess = defaultGuess}) => (
  <p className="guess">
    {
      range(5).map((idx) =>
        <span className={`cell ${guess[idx].status}`} key={idx}>
          {guess[idx].letter}
        </span>
      )
    }
  </p>
);

export default Guess;
