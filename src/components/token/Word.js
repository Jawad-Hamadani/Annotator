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
import React, { useContext, useState } from "react";
import { TokenContext } from "../../contexts/TokenContext";
import { HistoryContext } from "../../contexts/HistoryContext";
import { DataContext } from "../../contexts/DataContext";

const Word = ({
  content,
  raw,
  index,
  joinWords,
  isMerged,
  chosenWordForMorphology,
  setChosenWordForMorphology,
}) => {
  const letters = content.split("");
  const {
    showToken: [showToken, toggleShowToken],
    word: [word, setWord],
    canResetMorph: [canResetMorph, toggleCanResetMorph],
  } = useContext(TokenContext);
  const {
    morphHasBeenClicked: [morphHasBeenClicked, toggleMorphHasBeenClicked],
  } = useContext(HistoryContext);
  const {
    lemma: [lemma, setLemma],
    coda: [coda, setCoda],
  } = useContext(DataContext);

  return (
    <>
      <div
        className={
          isMerged && chosenWordForMorphology
            ? "selected-merged-word-for-morphology"
            : chosenWordForMorphology
            ? "selected-word-for-morphology"
            : isMerged
            ? "words-input-active"
            : "morphology-div"
        }
      >
        {raw[raw.length - 1] !== content && !showToken && (
          <i
            onClick={() => {
              joinWords(index, index + 1);
            }}
            className="fas fa-arrow-left arrow"
          ></i>
        )}
        <div
          className="words-input"
          onClick={(e) => {
            if (showToken) {
              setWord([content]);
              setCoda(content);
              setLemma(content);
              toggleMorphHasBeenClicked(!morphHasBeenClicked);
              toggleCanResetMorph(true);
              setChosenWordForMorphology(index);
            }
          }}
        >
          {content}
        </div>
        {raw[0] !== content && !showToken && (
          <i
            onClick={() => {
              joinWords(index, index - 1);
            }}
            className="fas fa-arrow-right arrow"
          ></i>
        )}
      </div>
    </>
  );
};

export default Word;
