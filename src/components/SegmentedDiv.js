import { useState, useContext } from 'react';
import { Paper, Button } from '@material-ui/core';
import Words from './token/Words';
import Token from './token/Token';
import { TokenContext } from '../contexts/TokenContext';
import { SentencesContext } from '../contexts/SentencesContext';


const SegmentedDiv = () => {
  const {  showToken : [showToken, toggleShowToken]} = useContext(TokenContext);
  const {
    sentence: [sentence, setSentence],
  } = useContext(SentencesContext);
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
        <Paper variant='outlined' elevation={3}>
          <div className='words-container'>       
            <Words />
          </div>
        </Paper>
        <Button onClick={sentence!=='' && (()=>toggleShowToken(!showToken))} style={{marginTop:'0.5em'}} color='primary' variant="contained">{ showToken ? "Back to Coda" : "Go to Morphology"}</Button>
      </div>
     {showToken && <Token />}
      </>
    );
};

export default SegmentedDiv;
