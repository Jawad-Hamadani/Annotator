import React, { createContext, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = (props) => {
  const [showToken, toggleShowToken] = useState(false);
  const [word, setWord] = useState([""]);
  const [codaElement, setCodaElement] = useState("");
  const [canResetMorph, toggleCanResetMorph] = useState(false);
  return (
    <TokenContext.Provider
      value={{
        showToken: [showToken, toggleShowToken],
        word: [word, setWord],
        codaElement: [codaElement, setCodaElement],
        canResetMorph: [canResetMorph, toggleCanResetMorph],
      }}
    >
      {props.children}
    </TokenContext.Provider>
  );
};
