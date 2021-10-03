import React, { createContext, useState, useContext } from 'react';
import { SentencesContext } from './SentencesContext';

export const TokenContext = createContext();

export const TokenProvider = (props) => {
    const [showToken, toggleShowToken]= useState(false);
    const {words : [words, setWords]} = useContext(SentencesContext);
    // const word = words[index];
  return (
    <TokenContext.Provider
      value={{
        showToken : [showToken, toggleShowToken]
      }}
    >
      {props.children}
    </TokenContext.Provider>
  );
};
