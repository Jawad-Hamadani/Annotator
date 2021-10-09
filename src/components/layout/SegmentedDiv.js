import { useContext, useState } from "react";
import { Paper, Button } from "@material-ui/core";
import Words from "../token/Words";
import Token from "../token/Token";
import { TokenContext } from "../../contexts/TokenContext";
import { HistoryContext } from "../../contexts/HistoryContext";
import { DataContext } from "../../contexts/DataContext";

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
  } = useContext(HistoryContext);
  const {
    arrayIndex: [arrayIndex, setArrayIndex],
  } = useContext(HistoryContext);

  const undo = () => {
    if (arrayIndex !== 0) {
      setRaw(history[arrayIndex - 1]);
      setFixed(history[arrayIndex - 1].join(" "));
      setArrayIndex(arrayIndex - 1);
      history.pop();
      setHistory(history);
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
                !showToken && undo();
              }
            }}
            className="fas fa-redo"
          ></i>
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
          onClick={fixed !== "" && (() => toggleShowToken(!showToken))}
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
