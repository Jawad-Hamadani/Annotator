import { Button } from "@material-ui/core";
import { TokenContext } from "../../contexts/TokenContext";
import { useContext } from "react";
import { HistoryContext } from "../../contexts/HistoryContext";
import { DataContext } from "../../contexts/DataContext";

const ButtonGroup = () => {
  const {
    fixed: [fixed, setFixed],
  } = useContext(DataContext);
  const {
    showToken: [showToken, toggleShowToken],
  } = useContext(TokenContext);
  const {
    morphHistory: [morphHistory, setMorphHistory],
  } = useContext(HistoryContext);
  const {
    word: [word, setWord],
  } = useContext(TokenContext);
  const {
    codaElement: [codaElement, setCodaElement],
  } = useContext(TokenContext);
  const {
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
          setFixed("");
          toggleShowToken(false);
          setMorphHistory([]);
          setWord("");
          setCodaElement("");
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
        }}
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
