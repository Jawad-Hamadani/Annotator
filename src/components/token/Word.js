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
