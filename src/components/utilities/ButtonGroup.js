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
import { Button } from "@material-ui/core";
import { TokenContext } from "../../contexts/TokenContext";
import { useContext } from "react";
import { HistoryContext } from "../../contexts/HistoryContext";
import { DataContext } from "../../contexts/DataContext";

const ButtonGroup = () => {
  const {
    fixed: [fixed, setFixed],
    original: [original, setOriginal],
    lemma: [lemma, setLemma],
    gloss: [gloss, setGloss],
    taxonomy: [taxonomy, setTaxonomy],
    coda: [coda, setCoda],
    cleanUp: cleanUpData,
  } = useContext(DataContext);
  const {
    showToken: [showToken, toggleShowToken],
    word: [word, setWord],
    canResetMorph: [canResetMorph, toggleCanResetMorph],
    chosenWordForMorphology: [
      chosenWordForMorphology,
      setChosenWordForMorphology,
    ],
  } = useContext(TokenContext);
  const {
    morphHistory: [morphHistory, setMorphHistory],
    morphArrayIndex: [morphArrayIndex, setMorphArrayIndex],
  } = useContext(HistoryContext);
  return (
    <div className="flex-row">
      <Button
        size="large"
        style={{ marginTop: "10px", marginRight: "10px" }}
        variant="contained"
        color="primary"
        onClick={() => {
          toggleShowToken(false);
          setMorphHistory([]);
          setWord("");
          setCoda("");
          toggleCanResetMorph(false);
          cleanUpData();
          setChosenWordForMorphology(null);
        }}
      >
        Reset All
      </Button>

      <Button
        size="large"
        style={{ marginTop: "10px", marginRight: "10px" }}
        variant="contained"
        color="primary"
        onClick={() => {
          setWord(morphHistory[0]);
          setMorphHistory([morphHistory[0]]);
          setMorphArrayIndex(0);
          setGloss("");
          setTaxonomy([""]);
        }}
        disabled={!canResetMorph && true}
      >
        Reset Morphology
      </Button>
      <Button
        size="large"
        style={{ marginTop: "10px", marginRight: "10px" }}
        variant="contained"
        color="primary"
      >
        Save and Next
      </Button>
    </div>
  );
};

export default ButtonGroup;
