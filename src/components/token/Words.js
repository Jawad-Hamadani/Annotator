import React, { useContext, useState, useEffect } from "react";
import { HistoryContext } from "../../contexts/HistoryContext";
import { SentencesContext } from "../../contexts/SentencesContext";
import Word from "./Word";

const Words = ({ history, setHistory, arrayIndex, setArrayIndex }) => {
  const {
    sentence: [sentence, setSentence],
  } = useContext(SentencesContext);
  const [change, setChange] = useState(false);
  const {
    words: [words, setWords],
  } = useContext(SentencesContext);
  const {
    hasBeenClicked: [hasBeenClicked, toggleHasBeenClicked],
  } = useContext(HistoryContext);

  useEffect(() => {
    setWords(sentence.split(" ").filter((e) => e));
  }, [sentence]);

  useEffect(() => {
    setHistory([sentence.split(" ").filter((e) => e)]);
  }, [hasBeenClicked]);

  function joinWords(i, j) {
    let newArr = [...words];
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
    setWords(newArr);
    temp.push(newArr);
    setHistory(temp);
    setArrayIndex(arrayIndex + 1);
    setChange(!change);
  }

  return (
    <>
      {words.map((word, i) => (
        <Word
          content={word}
          words={words}
          key={i}
          index={i}
          joinWords={joinWords}
        />
      ))}
    </>
  );
};

export default Words;
