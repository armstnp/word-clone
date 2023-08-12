import React from "react";

const layout =
  [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

const addLetterStatus = (letter, guesses) => {
  const letterStatuses =
    guesses
      .flatMap((x) => x)
      .filter(({letter: entryLetter}) => letter === entryLetter)
      .map(({status}) => status);

  const status =
    letterStatuses.includes('correct')
      ? 'correct'
      : letterStatuses.includes('misplaced')
      ? 'misplaced'
      : letterStatuses.includes('incorrect')
      ? 'incorrect'
      : 'unused';
  
  return { text: letter, status };
};


function Keyboard({guesses}) {
  const coloredLayout =
    layout.map((row) => row.map((letter) =>
      (addLetterStatus(letter, guesses))));

  return (
    <div className="keyboard">
      {coloredLayout.map((row, index) =>
        <div className="row" key={index}>
          {row.map((letter, index) =>
            <span className={`letter ${letter.status}`} key={index}>
              {letter.text}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default Keyboard;
