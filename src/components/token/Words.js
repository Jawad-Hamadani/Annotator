import React, { useContext, useState, useEffect } from 'react';
import { SentencesContext } from '../../contexts/SentencesContext';
import Word from './Word';

const Words = () => {
  const {
    sentence: [sentence, setSentence],
  } = useContext(SentencesContext);
  const [change, setChange] = useState(false);
  const {words : [words, setWords]} = useContext(SentencesContext);
  const [history, setHistory] = useState([]);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [activeIndexes, setActiveIndexes] = useState(null);

  useEffect(() => {
    setWords(sentence.split(' ').filter((e) => e));
    setSentence(
      sentence
        .split(' ')
        .filter((e) => e)
        .join(' ')
    );
    setHistory([sentence.split(' ').filter((e) => e)]);
  }, [sentence]);

  function joinWords(i, j) {
    // let newArr = words;
    let newArr = [...words];
    let firstWord = newArr[i];
    let secondWord = newArr[j];
    if (i > j) {
      newArr.splice(j, 1);
      newArr[j] = secondWord + firstWord;
      setActiveIndexes(j);
    } else {
      newArr.splice(i, 1);
      newArr[i] = firstWord + secondWord;
      setActiveIndexes(i);
    }
    let temp = history;
    setWords(newArr);
    setSentence(newArr.join(' '));
    temp.push(newArr);
    setHistory(temp);
    setArrayIndex(arrayIndex + 1);
    setChange(!change);
  }

  function splitWords(item, e, wordIndex) {
    const index = ('Caret at: ', e.target.selectionStart);
    if(index == 0 || index == item.length){return}
    const word = item.split('');
    const firstWord = word.splice(0, index).join('');
    const secondWord = word.join('');
    let newArr = [...words];
    newArr.splice(wordIndex, 1);
    if (firstWord && secondWord !== '') {
      // must validate that what im cutting isnt the beggining or the end of the word
      newArr.splice(wordIndex, 0, secondWord);
      newArr.splice(wordIndex, 0, firstWord);
    }
    setWords(newArr);
    setSentence(newArr.join(' '));
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
          splitWords={splitWords}
          isActiveIndex={i === activeIndexes}
        />
      ))}
    </>
  );
};

export default Words;
