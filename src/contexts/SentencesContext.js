import React, { createContext, useState } from "react";

export const SentencesContext = createContext();

export const SentencesProvider = (props) => {
  const [edit, setEdit] = useState(false);
  const [mergedIndexes, setMergedIndexes] = useState([]);

  return (
    <SentencesContext.Provider
      value={{
        edit: [edit, setEdit],
        mergedIndexes: [mergedIndexes, setMergedIndexes],
      }}
    >
      {props.children}
    </SentencesContext.Provider>
  );
};
