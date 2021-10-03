import React, { createContext, useState } from 'react';

export const TokenContext = createContext();

export const TokenProvider = (props) => {
    const [showToken, toggleShowToken]= useState(false);

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
