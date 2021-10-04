import { useContext, useState } from 'react';
import { Paper, Button } from '@material-ui/core';
import Words from '../token/Words';
import Token from '../token/Token';
import { TokenContext } from '../../contexts/TokenContext';
import { SentencesContext } from '../../contexts/SentencesContext';


const SegmentedDiv = () => {
  const {  showToken : [showToken, toggleShowToken]} = useContext(TokenContext);
  const {
    sentence: [sentence, setSentence],
  } = useContext(SentencesContext);
  const {words : [words, setWords]} = useContext(SentencesContext);
  const [history, setHistory] = useState([]);
  const [arrayIndex, setArrayIndex] = useState(0);

  const undo = ()=>{
    if(arrayIndex !== 0){
      setWords(history[arrayIndex-1]);
      setSentence(history[arrayIndex-1].join(' '));
      setArrayIndex(arrayIndex-1);
    }
  }
  const redo = ()=>{
    if(arrayIndex !== history.length-1){
    setWords(history[arrayIndex+1]);
    setSentence(history[arrayIndex+1].join(' '));
    setArrayIndex(arrayIndex+1);
    }
  }
    return (
      <>
      <div
        style={{
          width: ' 80%',
          margin: '1.5em 0',
          display:'flex',
          flexDirection:'column'
        }}
      >
          <div className='undo-redo'>
        <i title="Redo" onClick={()=>redo()} className="fas fa-undo"></i>
        <i title="Undo" onClick={()=>undo()} className="fas fa-redo"></i>
          </div>
        <Paper variant='outlined' elevation={3}>
          <div className='words-container'>       
            <Words history={history} setHistory={setHistory} arrayIndex={arrayIndex} setArrayIndex={setArrayIndex} />
          </div>
        </Paper>
        <Button onClick={sentence!=='' && (()=>toggleShowToken(!showToken))} style={{marginTop:'0.5em'}} color='primary' variant="contained">{ showToken ? "Back to Coda" : "Go to Morphology"}</Button>
      </div>
     {showToken && <Token />}
      </>
    );
};

export default SegmentedDiv;
