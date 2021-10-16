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
import {
  List,
  ListItem,
  Paper,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { useState, useContext } from "react";
import { SentencesContext } from "../../contexts/SentencesContext";
import { TokenContext } from "../../contexts/TokenContext";
import { HistoryContext } from "../../contexts/HistoryContext";
import { DataContext } from "../../contexts/DataContext";

const Sentences = ({}) => {
  const {
    showToken: [showToken, toggleShowToken],
    word: [word, setWord],
    chosenWordForMorphology: [
      chosenWordForMorphology,
      setChosenWordForMorphology,
    ],
  } = useContext(TokenContext);

  const {
    fixed: [fixed, setFixed],
    original: [original, setOriginal],
    taxonomy: [taxonomy, setTaxonomy],
    coda: [coda, setCoda],
    cleanUp: cleanUpData,
  } = useContext(DataContext);
  const {
    edit: [edit, setEdit],
    mergedIndexes: [mergedIndexes, setMergedIndexes],
  } = useContext(SentencesContext);

  const {
    arrayIndex: [arrayIndex, setArrayIndex],
    hasBeenClicked: [hasBeenClicked, toggleHasBeenClicked],
  } = useContext(HistoryContext);

  const [sentences, setSentences] = useState([
    "سرعه وموبايل وانعدام المسؤوليه هيدي السواقه بلبنان والموت ببلاش",
    "قلن ما يعلوا الصوت وما يقربوا الكاميرا اللي رح تشوفوا الليله ما شفتوا متله من قبل",
    "حابب تترك و تمشي",
    "حتى بالد ين يعني صارلازم نفصل افلام دينيه مشان تنبسط الدين واقع ما بيتغير اذا غيرنا معناتو عم نغير الدين مع احترامي لكل الأديان ",
    "نحنا اللبنانيين اه علقانين بحيرات المجارير او بالثلج او بشي جوره عالطريق او على مطب نفايات او علقانين بلبنان مافينا نطلع منو",
    "خليك دايما مش بالمسؤوليه تجاه كل شي عم يصير يمكن يلحقك الدور",
    "لازم تعرف يا عميل انت مين وحركه امل مين",
  ]);

  return (
    <div>
      <Paper style={{ maxHeight: 300, overflow: "auto" }}>
        <List>
          {sentences.map((item, i) => (
            <div key={i}>
              {" "}
              <ListItem
                className="sentences"
                onClick={() => {
                  cleanUpData("");
                  setFixed(item);
                  setOriginal(item);
                  setEdit(false);
                  setWord([""]);
                  toggleShowToken(false);
                  setArrayIndex(0);
                  toggleHasBeenClicked(!hasBeenClicked);
                  setMergedIndexes([]);

                  setChosenWordForMorphology(null);
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
              <Divider variant="middle" component="li" />
            </div>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default Sentences;
