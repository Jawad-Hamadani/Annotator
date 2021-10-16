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
import { useContext, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import SelectGroup from "../utilities/SelectGroup";

const Taxonomy = ({ tags, morphologyHasValue, toggleMorphologyHasValue }) => {
  const selectStyle = {
    marginTop: "0.5em",
    borderRadius: "0",
    width: "100%",
    display: "flex",
  };
  const {
    taxonomy: [taxonomy, setTaxonomy],
  } = useContext(DataContext);

  const addTaxonomy = () => {
    if (taxonomy.length === 4) {
      return;
    }
    let temp = [...taxonomy, ""];
    setTaxonomy(temp);
  };

  const changeTaxonomy = (e, index) => {
    let temp = [...taxonomy];
    temp[index] = e;
    setTaxonomy(temp);
  };

  useEffect(() => {}, []);

  const gridTaxonomy = {
    display: "flex",
    flexDirection: "row-reverse",
    gridGap: "0.3em",
  };

  return (
    <div className="grid-5">
      <div style={gridTaxonomy}>
        {taxonomy.map((item, i) => (
          <div style={{ flex: "1" }}>
            <SelectGroup
              disabled={!morphologyHasValue && true}
              styleT={selectStyle}
              formSize="small"
              options={tags.taxonomy}
              variant="outlined"
              formWidth="100%"
              onChange={(e) => changeTaxonomy(e, i)}
            />
          </div>
        ))}
      </div>

      <i
        class="fas fa-lg fa-plus"
        onClick={() => {
          if (morphologyHasValue) {
            addTaxonomy();
          }
        }}
      ></i>
    </div>
  );
};

export default Taxonomy;
