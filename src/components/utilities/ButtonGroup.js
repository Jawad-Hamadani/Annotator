import { Button } from "@material-ui/core";
import { SentencesContext } from "../../contexts/SentencesContext";
import { TokenContext } from "../../contexts/TokenContext";
import { useContext } from "react";
import { HistoryContext } from "../../contexts/HistoryContext";

const ButtonGroup = () => {
  const {
    sentence: [sentence, setSentence],
  } = useContext(SentencesContext);
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
          setSentence("");
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
