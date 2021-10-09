import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import { HistoryContext } from "../../contexts/HistoryContext";
import { SentencesContext } from "../../contexts/SentencesContext";
import Word from "./Word";

const Words = ({ history, setHistory, arrayIndex, setArrayIndex }) => {
  const {
    fixed: [fixed, setFixed],
    raw: [raw, setRaw],
  } = useContext(DataContext);
  const [change, setChange] = useState(false);
  const {
    mergedIndexes: [mergedIndexes, setMergedIndexes],
  } = useContext(SentencesContext);
  const {
    hasBeenClicked: [hasBeenClicked, toggleHasBeenClicked],
  } = useContext(HistoryContext);
  const {
    mergedIndexesHistory: [mergedIndexesHistory, setMergedIndexesHistory],
  } = useContext(HistoryContext);

  useEffect(() => {
    setRaw(fixed.split(" ").filter((e) => e));
  }, [fixed]);

  useEffect(() => {
    setHistory([fixed.split(" ").filter((e) => e)]);
  }, [hasBeenClicked]);

  useEffect(() => {
    setMergedIndexesHistory(mergedIndexes);
  }, []);

  // useEffect(() => {
  //   let tempIndexes = mergedIndexesHistory;
  //   tempIndexes.push(mergedIndexes);
  //   setMergedIndexesHistory(tempIndexes);
  // }, [mergedIndexes]);

  function joinWords(i, j) {
    let newArr = [...raw];
    let firstWord = newArr[i];
    let secondWord = newArr[j];
    if (i > j) {
      newArr.splice(j, 1);
      newArr[j] = secondWord + " " + firstWord;
      for (let n = 0; n < mergedIndexes.length; n++) {
        if (j < mergedIndexes[n]) {
          mergedIndexes[n] = mergedIndexes[n] - 1;
        }
      }
      setMergedIndexes([...mergedIndexes, j]);
    } else {
      newArr.splice(i, 1);
      newArr[i] = firstWord + " " + secondWord;
      for (let n = 0; n < mergedIndexes.length; n++) {
        if (i < mergedIndexes[n]) {
          mergedIndexes[n] = mergedIndexes[n] - 1;
        }
      }
      setMergedIndexes([...mergedIndexes, i]);
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
          isMerged={mergedIndexes.includes(i)}
        />
      ))}
    </>
  );
};

export default Words;
