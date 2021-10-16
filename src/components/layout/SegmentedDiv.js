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
import { Paper, Button } from "@material-ui/core";
import Words from "../token/Words";
import Token from "../token/Token";
import { TokenContext } from "../../contexts/TokenContext";
import { HistoryContext } from "../../contexts/HistoryContext";
import { DataContext } from "../../contexts/DataContext";
import { SentencesContext } from "../../contexts/SentencesContext";

const SegmentedDiv = () => {
  const {
    showToken: [showToken, toggleShowToken],
  } = useContext(TokenContext);
  const {
    fixed: [fixed, setFixed],
    raw: [raw, setRaw],
  } = useContext(DataContext);
  const {
    history: [history, setHistory],
    arrayIndex: [arrayIndex, setArrayIndex],
  } = useContext(HistoryContext);
  const {
    mergedIndexes: [mergedIndexes, setMergedIndexes],
  } = useContext(SentencesContext);

  const undo = () => {
    if (arrayIndex !== 0) {
      setRaw(history[arrayIndex - 1]);
      setArrayIndex(arrayIndex - 1);
      history.pop();
      setHistory(history);
    }
  };

  const resetSegmentation = () => {
    setRaw(history[0]);
    setArrayIndex(0);
    setHistory([history[0]]);
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
      <div
        style={{
          width: " 80%",
          margin: "1.5em 0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="undo-redo">
          <i
            title="Undo"
            onClick={() => {
              {
                if (!showToken) {
                  undo();
                  undoMergedIndexes();
                }
              }
            }}
            className="fas fa-undo"
          ></i>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
              {
                if (!showToken) {
                  resetSegmentation();
                  setMergedIndexes([]);
                }
              }
            }}
            disabled={showToken && true}
          >
            Reset Segmentation
          </Button>
        </div>
        <Paper variant="outlined" elevation={3}>
          <div className="words-container">
            <Words
              history={history}
              setHistory={setHistory}
              arrayIndex={arrayIndex}
              setArrayIndex={setArrayIndex}
            />
          </div>
        </Paper>
        <Button
          onClick={
            fixed !== "" &&
            (() => {
              toggleShowToken(!showToken);
            })
          }
          style={{ marginTop: "0.5em" }}
          color="primary"
          variant="contained"
        >
          {showToken ? "Back to Coda" : "Go to Morphology"}
        </Button>
      </div>
      {showToken && <Token />}
    </>
  );
};

export default SegmentedDiv;
