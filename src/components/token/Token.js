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
import { useContext, useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import Morphology from "./Morphology";
import CodaLemmaGloss from "./CodaLemmaGloss";
import { makeStyles } from "@material-ui/core/styles";
import { TokenContext } from "../../contexts/TokenContext";
import { HistoryContext } from "../../contexts/HistoryContext";
import { DataContext } from "../../contexts/DataContext";
import ButtonGroup from "../utilities/ButtonGroup";
import Taxonomy from "./Taxonomy";
import Tags from "./tags.json";

const useStyles = makeStyles({
  root: {
    borderRadius: "0",
  },
});

const Token = () => {
  const [morphologyHasValue, toggleMorphologyHasValue] = useState(false);
  const {
    word: [word, setWord],
  } = useContext(TokenContext);
  const {
    pos: [pos, setPos],
    posValue: [posValue, setPosValue],
    nounForm: [nounForm, setNounForm],
    verbForm: [verbForm, setVerbForm],
    tokens: [tokens, setTokens],
  } = useContext(DataContext);
  const {
    morphHistory: [morphHistory, setMorphHistory],
  } = useContext(HistoryContext);
  const {
    morphArrayIndex: [morphArrayIndex, setMorphArrayIndex],
  } = useContext(HistoryContext);
  const [morphFlag, toggleMoprhFlag] = useState(false);

  useEffect(() => {
    setMorphHistory(morphHistory);
  }, [morphFlag]);

  const classes = useStyles();

  const splitWords = (item, e, wordIndex) => {
    const index = ("Caret at: ", e.target.selectionStart);
    if (index == 0 || index == item.length) {
      return;
    }
    const letters = item.split("");
    const firstWord = letters.splice(0, index).join("");
    const secondWord = letters.join("");
    let newArr = [...word];
    newArr.splice(wordIndex, 1);
    if (firstWord && secondWord) {
      newArr.splice(wordIndex, 0, secondWord);
      newArr.splice(wordIndex, 0, firstWord);
    }
    if (firstWord == " " || secondWord == " ") {
      return;
    }
    let temp = morphHistory;
    setWord(newArr);
    temp.push(newArr);
    setMorphHistory(temp);
    toggleMoprhFlag(!morphFlag);
    setMorphArrayIndex(morphArrayIndex + 1);
  };

  const morphUndo = () => {
    if (morphArrayIndex !== 0) {
      setWord(morphHistory[morphArrayIndex - 1]);
      setMorphArrayIndex(morphArrayIndex - 1);
      morphHistory.pop();
      setMorphHistory(morphHistory);
    }
  };

  return (
    <div>
      <Paper className={classes.root} variant="outlined" id="work-space">
        {" "}
        <div className="flex-morphology">
          <i
            title="Undo"
            onClick={() => {
              {
                morphUndo();
              }
            }}
            className="fas fa-undo"
          ></i>
          {word.map((item, i) => (
            <Morphology
              morphologyHasValue={morphologyHasValue}
              toggleMorphologyHasValue={toggleMorphologyHasValue}
              tags={Tags}
              value={item}
              key={i}
              word={word}
              morphologyIndex={i}
              splitWords={splitWords}
              setMorphHistory={setMorphHistory}
              tokens={tokens}
              setTokens={setTokens}
            />
          ))}
        </div>
        <CodaLemmaGloss
          morphologyHasValue={morphologyHasValue}
          toggleMorphologyHasValue={toggleMorphologyHasValue}
          tags={Tags}
        />
        <Taxonomy
          morphologyHasValue={morphologyHasValue}
          toggleMorphologyHasValue={toggleMorphologyHasValue}
          tags={Tags}
        />
      </Paper>
      <ButtonGroup />
    </div>
  );
};

export default Token;
