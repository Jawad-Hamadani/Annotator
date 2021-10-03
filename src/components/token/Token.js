import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import Morphology from './Morphology';
import InputSelectValidated from './InputSelectValidatedToken';
import { makeStyles } from '@material-ui/core/styles';
import { TokenContext } from '../../contexts/TokenContext';

const useStyles = makeStyles({
  root: {
    borderRadius: '0',
  },
});

const Token = () => {
  const { word : [word, setWord] } = useContext(TokenContext);
  const classes = useStyles();
  var wordToken=[`${word}`];
  
  return (
    <div>
      <Paper className={classes.root} variant='outlined' id='work-space'>
        {' '}
        <div className='flex-morphology'>
        {wordToken.map((item, i)=>(
         <Morphology value={item} key={i} />
        ))}
        </div>
        <InputSelectValidated />
      </Paper>
    </div>
  );
};

export default Token;
