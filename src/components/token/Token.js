import { useContext, useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import Morphology from "./Morphology";
import InputSelectValidated from "./InputSelectValidatedToken";
import { makeStyles } from "@material-ui/core/styles";
import { TokenContext } from "../../contexts/TokenContext";
import { HistoryContext } from "../../contexts/HistoryContext";
import ButtonGroup from "../utilities/ButtonGroup";

const useStyles = makeStyles({
  root: {
    borderRadius: "0",
  },
});

const Token = () => {
  const {
    word: [word, setWord],
  } = useContext(TokenContext);
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

  function splitWords(item, e, wordIndex) {
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
    console.log(morphHistory);
    setMorphArrayIndex(morphArrayIndex + 1);
  }

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
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#c9c4b3",
              padding: "0.3em",
            }}
            title="Undo"
            onClick={() => {
              {
                morphUndo();
              }
            }}
            className="fas fa-redo"
          ></i>
          {word.map((item, i) => (
            <Morphology
              value={item}
              key={i}
              word={word}
              index={i}
              splitWords={splitWords}
              morphHistory={morphHistory}
              setMorphArrayIndex={setMorphArrayIndex}
              morphArrayIndex={morphArrayIndex}
              setMorphHistory={setMorphHistory}
            />
          ))}
        </div>
        <InputSelectValidated />
      </Paper>
      <ButtonGroup />
    </div>
  );
};

export default Token;
