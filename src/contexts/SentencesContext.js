import React, { createContext, useState } from 'react';

export const SentencesContext = createContext();

export const SentencesProvider = (props) => {
  const [sentence, setSentence] = useState('');
  const [edit, setEdit] = useState(false);
  const [words, setWords] = useState(sentence.split(' ').filter((e) => e));

  return (
    <SentencesContext.Provider
      value={{
        sentence: [sentence, setSentence],
        edit: [edit, setEdit],
        words : [words, setWords],
      }}
    >
      {props.children}
    </SentencesContext.Provider>
  );
};
