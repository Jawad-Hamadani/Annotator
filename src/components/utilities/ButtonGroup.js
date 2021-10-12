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
    cleanUp: cleanUpData,
  } = useContext(DataContext);
  const {
    showToken: [showToken, toggleShowToken],
    word: [word, setWord],
    codaElement: [codaElement, setCodaElement],
    canResetMorph: [canResetMorph, toggleCanResetMorph],
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
          setCodaElement("");
          toggleCanResetMorph(false);
          cleanUpData();
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
