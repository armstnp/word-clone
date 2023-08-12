import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Guess from "../Guess";

const GuessResults = ({guesses}) => (
  <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((idx) =>
      <Guess guess={guesses[idx]} key={idx} />
    )}
  </div>
);

export default GuessResults;
