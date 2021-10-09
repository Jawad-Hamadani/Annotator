import React, { useContext, useEffect } from "react";
import { TokenContext } from "../../contexts/TokenContext";
import { HistoryContext } from "../../contexts/HistoryContext";

const Word = ({ content, words, index, joinWords }) => {
  const letters = content.split("");
  const {
    showToken: [showToken, toggleShowToken],
  } = useContext(TokenContext);
  const {
    word: [word, setWord],
  } = useContext(TokenContext);
  const {
    codaElement: [codaElement, setCodaElement],
  } = useContext(TokenContext);
  const {
    morphHasBeenClicked: [morphHasBeenClicked, toggleMorphHasBeenClicked],
  } = useContext(HistoryContext);

  return (
    <>
      <div className="morphology-div">
        {words[words.length - 1] !== content && !showToken && (
          <i
            onClick={() => {
              joinWords(index, index + 1);
            }}
            className="fas fa-arrow-left arrow"
          ></i>
        )}
        {/* <input
          value={content}
          style={{
            maxWidth: `${content.length + 1}ch`,
          }}
          className="words-input"
          onClick={(e) => {
            if (showToken) {
              setWord([content]);
              setCodaElement(content);
              toggleMorphHasBeenClicked(!morphHasBeenClicked);
            }
          }}
        /> */}
        <div
          className="words-input"
          onClick={(e) => {
            if (showToken) {
              setWord([content]);
              setCodaElement(content);
              toggleMorphHasBeenClicked(!morphHasBeenClicked);
            }
          }}
        >
          {content}
        </div>
        {words[0] !== content && !showToken && (
          <i
            onClick={() => joinWords(index, index - 1)}
            className="fas fa-arrow-right arrow"
          ></i>
        )}
      </div>
    </>
  );
};

export default Word;
