// MIT License
//
// Copyright 2021 Mohammad Jawad Moshati Hamadani
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import { HistoryContext } from "../../contexts/HistoryContext";
import { SentencesContext } from "../../contexts/SentencesContext";
import { TokenContext } from "../../contexts/TokenContext";
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
    chosenWordForMorphology: [
      chosenWordForMorphology,
      setChosenWordForMorphology,
    ],
  } = useContext(TokenContext);

  useEffect(() => {
    setRaw(fixed.split(" ").filter((e) => e));
  }, [fixed]);

  useEffect(() => {
    setHistory([fixed.split(" ").filter((e) => e)]);
  }, [hasBeenClicked]);

  const joinWords = (i, j) => {
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

    setRaw(newArr);
    let temp = [...history, newArr];
    setHistory(temp);
    setArrayIndex(arrayIndex + 1);
    setChange(!change);
  };

  const undoMergedIndexes = () => {
    if (mergedIndexes !== []) {
      const toBePopped = mergedIndexes[mergedIndexes.length - 1];
      for (let n = 0; n < mergedIndexes.length; n++) {
        if (toBePopped <= mergedIndexes[n]) {
          mergedIndexes[n] = mergedIndexes[n] + 1;
        }
      }
      const temp = [...mergedIndexes];
      temp.pop();
      setMergedIndexes(temp);
    }
  };

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
          chosenWordForMorphology={chosenWordForMorphology === i}
          setChosenWordForMorphology={setChosenWordForMorphology}
        />
      ))}
    </>
  );
};

export default Words;
