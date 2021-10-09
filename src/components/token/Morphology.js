import { useEffect, useContext } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { HistoryContext } from "../../contexts/HistoryContext";
import { TokenContext } from "../../contexts/TokenContext";
import SelectGroup from "../utilities/SelectGroup";

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
  morphArrayIndex,
  setMorphHistory,
  setMorphArrayIndex,
  morphHistory,
  word,
}) => {
  const borderRaduis = { borderRadius: "0" };

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
        onClick={(e) => {
          splitWords(value, e, index);
        }}
      />
      <SelectGroup
        styleT={borderRaduis}
        formSize="small"
        options={["", ""]}
        variant="outlined"
        disabled
        formWidth="100%"
      />
    </div>
  );
};

export default Morphology;
