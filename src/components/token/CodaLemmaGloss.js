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
import { useContext } from "react";
import SelectGroup from "../utilities/SelectGroup";
import { TextField } from "@material-ui/core";
import { TokenContext } from "../../contexts/TokenContext";
import { DataContext } from "../../contexts/DataContext";

const CodaLemmaGloss = ({
  tags,
  morphologyHasValue,
  toggleMorphologyHasValue,
}) => {
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
          disabled={!morphologyHasValue && true}
          className="TextField-without-border-radius"
          dir="rtl"
          size="small"
          id="outlined-basic"
          variant="outlined"
          value={coda}
          onChange={(e) => {
            setCoda(e.target.value);
          }}
          placeholder="Coda"
        />
      </div>
      <div>
        <TextField
          disabled={!morphologyHasValue && true}
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
          disabled={!morphologyHasValue && true}
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
        disabled={!morphologyHasValue && true}
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
