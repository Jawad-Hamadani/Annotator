import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { TextField } from "@material-ui/core";

const OriginalSentence = () => {
  const {
    original: [original, setOriginal],
  } = useContext(DataContext);
  return (
    <div style={{ width: "80%" }}>
      <TextField
        dir="rtl"
        label="Original Sentence"
        className="main-form"
        multiline
        id="outlined-basic"
        disabled
        variant="outlined"
        value={original}
        inputProps={{ style: { fontSize: "1.3em" } }}
      />
    </div>
  );
};
export default OriginalSentence;
