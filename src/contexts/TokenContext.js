import React, { createContext, useState, useContext } from "react";
import { SentencesContext } from "./SentencesContext";

export const TokenContext = createContext();

export const TokenProvider = (props) => {
  const [showToken, toggleShowToken] = useState(false);
  const {
    words: [words, setWords],
  } = useContext(SentencesContext);
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
