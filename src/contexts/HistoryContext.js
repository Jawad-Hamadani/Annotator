import React, { createContext, useState } from "react";

export const HistoryContext = createContext();

export const HistoryProvider = (props) => {
  const [history, setHistory] = useState([]);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [hasBeenClicked, toggleHasBeenClicked] = useState(false);
  const [morphHistory, setMorphHistory] = useState([]);
  const [morphArrayIndex, setMorphArrayIndex] = useState(0);
  const [morphHasBeenClicked, toggleMorphHasBeenClicked] = useState(false);

  return (
    <HistoryContext.Provider
      value={{
        history: [history, setHistory],
        arrayIndex: [arrayIndex, setArrayIndex],
        hasBeenClicked: [hasBeenClicked, toggleHasBeenClicked],
        morphHistory: [morphHistory, setMorphHistory],
        morphArrayIndex: [morphArrayIndex, setMorphArrayIndex],
        morphHasBeenClicked: [morphHasBeenClicked, toggleMorphHasBeenClicked],
      }}
    >
      {props.children}
    </HistoryContext.Provider>
  );
};
