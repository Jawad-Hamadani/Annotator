import { useContext } from "react";
import SelectGroup from "../utilities/SelectGroup";
import { TextField } from "@material-ui/core";
import { TokenContext } from "../../contexts/TokenContext";
import { DataContext } from "../../contexts/DataContext";

const CodaLemmaGloss = ({ tags }) => {
  const {
    codaElement: [codaElement, setCodaElement],
  } = useContext(TokenContext);
  const {
    lemma: [lemma, setLemma],
    dialect: [dialect, setDialect],
    gloss: [gloss, setGloss],
    coda: [coda, setCoda],
  } = useContext(DataContext);

  const DIALECT = tags.dialect;
  return (
    <div className="grid-4">
      <div>
        <TextField
          className="TextField-without-border-radius"
          dir="rtl"
          size="small"
          id="outlined-basic"
          variant="outlined"
          value={codaElement}
          onChange={(e) => {
            setCodaElement(e.target.value);
          }}
          placeholder="Coda"
        />
      </div>
      <div>
        <TextField
          className="TextField-without-border-radius"
          dir="rtl"
          size="small"
          id="outlined-basic"
          variant="outlined"
          value={lemma}
          onChange={(e) => setLemma(e.target.value)}
          placeholder="Lemma"
        />
      </div>
      <div>
        <TextField
          className="TextField-without-border-radius"
          size="small"
          id="outlined-basic"
          variant="outlined"
          fullWidth
          value={gloss}
          onChange={(e) => setGloss(e.target.value)}
          placeholder="Gloss"
        />
      </div>
      <SelectGroup
        styleT={{ borderRadius: "0" }}
        formSize="small"
        variant="outlined"
        formWidth="100%"
        options={DIALECT}
        onChange={(e) => setDialect(e)}
      />
    </div>
  );
};

export default CodaLemmaGloss;