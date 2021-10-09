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

const Sentences = ({}) => {
  const {
    showToken: [showToken, toggleShowToken],
  } = useContext(TokenContext);
  const {
    word: [word, setWord],
  } = useContext(TokenContext);
  const {
    sentence: [sentence, setSentence],
    edit: [edit, setEdit],
  } = useContext(SentencesContext);
  const {
    history: [history, setHistory],
  } = useContext(HistoryContext);
  const {
    arrayIndex: [arrayIndex, setArrayIndex],
  } = useContext(HistoryContext);
  const {
    codaElement: [codaElement, setCodaElement],
  } = useContext(TokenContext);
  const [sentences, setSentences] = useState([
    "سرعه وموبايل وانعدام المسؤوليه هيدي السواقه بلبنان والموت ببلاش",
    "قلن ما يعلوا الصوت وما يقربوا الكاميرا اللي رح تشوفوا الليله ما شفتوا متله من قبل",
    "حابب تترك و تمشي",
    "حتى بالد ين يعني صارلازم نفصل افلام دينيه مشان تنبسط الدين واقع ما بيتغير اذا غيرنا معناتو عم نغير الدين مع احترامي لكل الأديان ",
    "نحنا اللبنانيين اه علقانين بحيرات المجارير او بالثلج او بشي جوره عالطريق او على مطب نفايات او علقانين بلبنان مافينا نطلع منو",
    "خليك دايما مش بالمسؤوليه تجاه كل شي عم يصير يمكن يلحقك الدور",
    "لازم تعرف يا عميل انت مين وحركه امل مين",
  ]);
  const {
    hasBeenClicked: [hasBeenClicked, toggleHasBeenClicked],
  } = useContext(HistoryContext);
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
                  setSentence(item);
                  setEdit(false);
                  setWord([""]);
                  toggleShowToken(false);
                  setArrayIndex(0);
                  toggleHasBeenClicked(!hasBeenClicked);
                  setCodaElement("");
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
