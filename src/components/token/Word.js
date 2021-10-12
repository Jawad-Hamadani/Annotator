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
  toggleSelected,
  selected,
}) => {
  const letters = content.split("");
  const {
    showToken: [showToken, toggleShowToken],
    word: [word, setWord],
    codaElement: [codaElement, setCodaElement],
    canResetMorph: [canResetMorph, toggleCanResetMorph],
  } = useContext(TokenContext);
  const {
    morphHasBeenClicked: [morphHasBeenClicked, toggleMorphHasBeenClicked],
  } = useContext(HistoryContext);
  const {
    lemma: [lemma, setLemma],
  } = useContext(DataContext);

  return (
    <>
      <div className={isMerged ? "words-input-active" : "morphology-div"}>
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
              setCodaElement(content);
              setLemma(content);
              toggleMorphHasBeenClicked(!morphHasBeenClicked);
              toggleSelected(true);
              toggleCanResetMorph(true);
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
