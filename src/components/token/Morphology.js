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
import { useEffect, useContext, useState } from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";
import { HistoryContext } from "../../contexts/HistoryContext";
import SelectGroup from "../utilities/SelectGroup";
import { DataContext } from "../../contexts/DataContext";

const useStyles = makeStyles({
  input: {
    textAlign: "center",
    fontSize: "1.5em",
  },
});

const Morphology = ({
  value,
  morphologyIndex,
  splitWords,
  setMorphHistory,
  word,
  tags,
  morphologyHasValue,
  toggleMorphologyHasValue,
}) => {
  const borderRadius = { borderRadius: "0" };
  const borderRadiusMargin = { marginTop: "0.5em", borderRadius: "0" };
  useEffect(() => {
    if (value !== "") {
      toggleMorphologyHasValue(true);
    } else {
      toggleMorphologyHasValue(false);
    }
  }, [value]);

  const [posLocal, setPosLocal] = useState("");
  const [posLocalValue, setPosLocalValue] = useState("");
  const [localNounForm, setLocalNounForm] = useState("");
  const [localVerbForm, setLocalVerbForm] = useState("");

  const POS = tags.pos;
  const posOptions = Object.keys(POS);

  const hasVal = POS[posLocal]?.values;
  const hasNounForm = POS[posLocal]?.features?.includes("nounForm");
  const hasVerbForm = POS[posLocal]?.features?.includes("verbForm");
  const NOUNFORMS = tags.nounForms;
  const VERBFORMS = tags.verbForms;

  const {
    morphHasBeenClicked: [morphHasBeenClicked, toggleMorphHasBeenClicked],
  } = useContext(HistoryContext);

  const {
    tokens: [tokens, setTokens],
  } = useContext(DataContext);

  useEffect(() => {
    setMorphHistory([word]);
  }, [morphHasBeenClicked]);

  const wordClone = [...word];

  useEffect(() => {
    const temp = [...tokens];
    temp[morphologyIndex] = {
      text: "",
      features: "",
      lemma: "",
      pos: "",
      form: "",
      gloss: "",
      dialect: "",
    };
    setTokens(temp);
  }, []);

  useEffect(() => {
    console.log(tokens);
  }, [tokens]);

  const classes = useStyles();

  const modifyObjectKey = (e, value) => {
    if (tokens[morphologyIndex]) {
      const temp = { ...tokens };
      temp[morphologyIndex][value] = e;
      setTokens(temp);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="flex-morphology">
        <div style={{ width: "90%" }}>
          <TextField
            className="TextField-without-border-radius"
            style={{ marginBottom: "0.5em" }}
            inputProps={{
              className: classes.input,
            }}
            dir="rtl"
            size="small"
            id="outlined-basic"
            variant="outlined"
            fullWidth
            value={value}
            placeholder="Press on a word to begin Morphology"
            onClick={(e) => {
              splitWords(value, e, morphologyIndex);
            }}
          />
        </div>
        <div
          style={{
            justifyContent: "center",
            alignIitems: "center",
            display: "flex",
            paddingTop: "1em",
            width: "10%",
          }}
        >
          <i title="Flag" class="fas fa-lg fa-flag"></i>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          gridGap: "0.3em",
        }}
      >
        <div style={{ flex: "1" }}>
          <SelectGroup
            disabled={!morphologyHasValue && true}
            styleT={borderRadius}
            formSize="small"
            options={posOptions}
            variant="outlined"
            formWidth="100%"
            onChange={(e) => {
              setPosLocal(e);
              modifyObjectKey(e, "pos");
            }}
          />
        </div>

        {Array.isArray(hasVal) && (
          <div style={{ flex: "1" }}>
            <SelectGroup
              disabled={!morphologyHasValue && true}
              styleT={borderRadius}
              formSize="small"
              options={hasVal}
              variant="outlined"
              formWidth="100%"
              onChange={(e) => {
                // modifyObjectKey(e, "features");
                setPosLocalValue(e);
              }}
            />
          </div>
        )}
      </div>
      <SelectGroup
        styleT={borderRadiusMargin}
        formSize="small"
        options={hasNounForm ? NOUNFORMS : hasVerbForm ? VERBFORMS : []}
        variant="outlined"
        disabled={
          hasNounForm && morphologyHasValue
            ? false
            : hasVerbForm && morphologyHasValue
            ? false
            : true
        }
        formWidth="100%"
        onChange={(e) => {
          if (hasNounForm) {
            setLocalNounForm(e);
            modifyObjectKey(e, "form");
          }
          if (hasVerbForm) {
            setLocalVerbForm(e);
            modifyObjectKey(e, "form");
          }
        }}
      />
    </div>
  );
};

export default Morphology;
