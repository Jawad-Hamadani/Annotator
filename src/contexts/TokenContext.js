import React, { createContext, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = (props) => {
  const [showToken, toggleShowToken] = useState(false);
  const [word, setWord] = useState([""]);
  const [codaElement, setCodaElement] = useState("");
  return (
    <TokenContext.Provider
      value={{
        showToken: [showToken, toggleShowToken],
        word: [word, setWord],
        codaElement: [codaElement, setCodaElement],
      }}
    >
      {props.children}
    </TokenContext.Provider>
  );
};
