import { useEffect, useContext, useState } from "react";
import { TextField, makeStyles } from "@material-ui/core";
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
  index,
  splitWords,
  setMorphHistory,
  word,
  tags,
}) => {
  const borderRadius = { borderRadius: "0" };
  const borderRadiusMargin = { marginTop: "0.5em", borderRadius: "0" };
  const {
    pos: [pos, setPos],
    posValue: [posValue, setPosValue],
    nounForm: [nounForm, setNounForm],
    verbForm: [verbForm, setVerbForm],
  } = useContext(DataContext);

  const POS = tags.pos;
  const posOptions = Object.keys(POS);

  const hasVal = POS[pos]?.values;
  const hasNounForm = POS[pos]?.features?.includes("nounForm");
  const hasVerbForm = POS[pos]?.features?.includes("verbForm");
  const NOUNFORMS = tags.nounForms;
  const VERBFORMS = tags.verbForms;
  console.log(NOUNFORMS);

  const {
    morphHasBeenClicked: [morphHasBeenClicked, toggleMorphHasBeenClicked],
  } = useContext(HistoryContext);

  useEffect(() => {
    setMorphHistory([word]);
  }, [morphHasBeenClicked]);

  const classes = useStyles();
  return (
    <div style={{ width: "100%" }}>
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
          splitWords(value, e, index);
        }}
      />
      <div
        style={{
          display: "flex",
          gridGap: "0.3em",
        }}
      >
        <div style={{ flex: "1" }}>
          <SelectGroup
            styleT={borderRadius}
            formSize="small"
            options={posOptions}
            variant="outlined"
            formWidth="100%"
            onChange={(e) => {
              setPos(e);
            }}
          />
        </div>

        {Array.isArray(hasVal) && (
          <div style={{ flex: "1" }}>
            <SelectGroup
              styleT={borderRadius}
              formSize="small"
              options={hasVal}
              variant="outlined"
              formWidth="100%"
              onChange={(e) => setPosValue(e)}
            />
          </div>
        )}
      </div>
      <SelectGroup
        styleT={borderRadiusMargin}
        formSize="small"
        options={hasNounForm ? NOUNFORMS : hasVerbForm ? VERBFORMS : []}
        variant="outlined"
        disabled={hasNounForm ? false : hasVerbForm ? false : true}
        formWidth="100%"
        onChange={(e) => {
          if (hasNounForm) {
            setNounForm(e);
          }
          if (hasVerbForm) {
            setVerbForm(e);
          }
        }}
      />
    </div>
  );
};

export default Morphology;
