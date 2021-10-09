import React, { createContext, useState } from "react";

export const SentencesContext = createContext();

export const SentencesProvider = (props) => {
  const [edit, setEdit] = useState(false);

  return (
    <SentencesContext.Provider
      value={{
        edit: [edit, setEdit],
      }}
    >
      {props.children}
    </SentencesContext.Provider>
  );
};
