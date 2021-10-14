import { TextField } from "@material-ui/core";
import { useContext } from "react";
import { SentencesContext } from "../../contexts/SentencesContext";
import { DataContext } from "../../contexts/DataContext";

const MainInput = ({}) => {
  const {
    fixed: [fixed, setFixed],
  } = useContext(DataContext);

  const {
    edit: [edit, setEdit],
  } = useContext(SentencesContext);

  return (
    <>
      <div className="icon-flex">
        <div style={{ width: "10%", paddingTop: "2em" }}>
          <i
            title="Edit Text"
            onClick={() => setEdit(!edit)}
            className="fas fa-edit fa-2x"
          ></i>
        </div>
        <div style={{ width: "100%" }}>
          <TextField
            dir="rtl"
            label="Input"
            className="main-form"
            multiline
            id="outlined-basic"
            disabled={edit ? false : true}
            variant="outlined"
            onChange={(e) => edit && setFixed(e.target.value)}
            value={fixed}
            inputProps={{ style: { fontSize: "1.3em" } }}
          />
        </div>
      </div>
    </>
  );
};

export default MainInput;
