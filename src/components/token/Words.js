import React, { useContext, useState, useEffect } from 'react';
import { SentencesContext } from '../../contexts/SentencesContext';
import Word from './Word';

const Words = () => {
  const {
    sentence: [sentence, setSentence],
  } = useContext(SentencesContext);
  const [change, setChange] = useState(false);
  const [words, setWords] = useState(sentence.split(' ').filter((e) => e));
  const [history, setHistory] = useState([]);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setWords(sentence.split(' ').filter((e) => e));
    setHistory([sentence.split(' ').filter((e) => e)]);
  }, [sentence]);

  function joinWords(i, j) {
    let newArr = words;
    let firstWord = newArr[i];
    let secondWord = newArr[j];
    if (i > j) {
      newArr.splice(j, 1);
      newArr[j] = secondWord + firstWord;
      setActiveIndex(j);
    } else {
      newArr.splice(i, 1);
      newArr[i] = firstWord + secondWord;
      setActiveIndex(i);
    }
    let temp = history;
    setWords(newArr);
    temp.push(newArr);
    setHistory(temp);
    // console.log(temp);
    setArrayIndex(arrayIndex + 1);
    setChange(!change);
  }

  function splitWords() {}

  useEffect(() => {}, [change, setChange]);
  useEffect(() => {}, [words, setWords]);
  return (
    <>
      {words.map((word, i) => (
        <Word
          content={word}
          words={words}
          key={i}
          index={i}
          joinWords={joinWords}
          isActiveIndex={i === activeIndex}
        />
      ))}
    </>
  );
};

export default Words;
