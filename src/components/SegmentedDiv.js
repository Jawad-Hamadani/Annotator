import { SentencesContext } from '../contexts/SentencesContext';
import { Paper, Box } from '@material-ui/core';
import Words from './token/Words';
import { useContext } from 'react';

const SegmentedDiv = () => {
  return (
    <div
      style={{
        width: ' 80%',
        margin: '1.5em 0',
      }}
    >
      <Paper variant='outlined' elevation={3}>
        <div className='words-container'>
          <Words />
        </div>
      </Paper>
    </div>
  );
};

export default SegmentedDiv;
