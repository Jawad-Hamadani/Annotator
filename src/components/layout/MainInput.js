// MIT License
//
// Copyright 2021 Mohammad Jawad Moshati Hamadani
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
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
