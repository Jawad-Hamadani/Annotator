import React, { createContext, useState } from 'react';

export const SentencesContext = createContext();

export const SentencesProvider = (props) => {
  const [sentence, setSentence] = useState('');
  const [edit, setEdit] = useState(false);

  return (
    <SentencesContext.Provider
      value={{
        sentence: [sentence, setSentence],
        edit: [edit, setEdit],
      }}
    >
      {props.children}
    </SentencesContext.Provider>
  );
};
