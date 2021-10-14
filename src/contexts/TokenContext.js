import React, { createContext, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = (props) => {
  const [showToken, toggleShowToken] = useState(false);
  const [word, setWord] = useState([""]);
  const [canResetMorph, toggleCanResetMorph] = useState(false);
  const [chosenWordForMorphology, setChosenWordForMorphology] = useState(null);

  return (
    <TokenContext.Provider
      value={{
        showToken: [showToken, toggleShowToken],
        word: [word, setWord],
        canResetMorph: [canResetMorph, toggleCanResetMorph],
        chosenWordForMorphology: [
          chosenWordForMorphology,
          setChosenWordForMorphology,
        ],
      }}
    >
      {props.children}
    </TokenContext.Provider>
  );
};
