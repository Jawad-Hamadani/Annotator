import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import { HistoryContext } from "../../contexts/HistoryContext";
import Word from "./Word";

const Words = ({ history, setHistory, arrayIndex, setArrayIndex }) => {
  const {
    fixed: [fixed, setFixed],
    raw: [raw, setRaw],
  } = useContext(DataContext);
  const [change, setChange] = useState(false);
  const {
    hasBeenClicked: [hasBeenClicked, toggleHasBeenClicked],
  } = useContext(HistoryContext);

  useEffect(() => {
    setRaw(fixed.split(" ").filter((e) => e));
  }, [fixed]);

  useEffect(() => {
    setHistory([fixed.split(" ").filter((e) => e)]);
  }, [hasBeenClicked]);

  function joinWords(i, j) {
    let newArr = [...raw];
    let firstWord = newArr[i];
    let secondWord = newArr[j];
    if (i > j) {
      newArr.splice(j, 1);
      newArr[j] = secondWord + " " + firstWord;
    } else {
      newArr.splice(i, 1);
      newArr[i] = firstWord + " " + secondWord;
    }

    let temp = history;
    setRaw(newArr);
    temp.push(newArr);
    setHistory(temp);
    setArrayIndex(arrayIndex + 1);
    setChange(!change);
  }

  return (
    <>
      {raw.map((word, i) => (
        <Word
          content={word}
          raw={raw}
          key={i}
          index={i}
          joinWords={joinWords}
        />
      ))}
    </>
  );
};

export default Words;
