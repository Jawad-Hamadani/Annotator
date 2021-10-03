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
 
  function splitWords(item, e, wordIndex) {
    const index = ('Caret at: ', e.target.selectionStart);
    if(index == 0 || index == item.length){return}
    const temp = item.split('');
    const firstWord = temp.splice(0, index).join('');
    const secondWord = temp.join('');
    let newArr = [...word];
    newArr.splice(wordIndex, 1);
    if (firstWord && secondWord) {
      newArr.splice(wordIndex, 0, secondWord);
      newArr.splice(wordIndex, 0, firstWord);
    }
    setWord(newArr);
  }

  return (
    <div>
      <Paper className={classes.root} variant='outlined' id='work-space'>
        {' '}
        <div className='flex-morphology'>
        {word.map((item, i)=>(
         <Morphology value={item} key={i} index={i} splitWords={splitWords} />
        ))}
        </div>
        <InputSelectValidated />
      </Paper>
    </div>
  );
};

export default Token;
