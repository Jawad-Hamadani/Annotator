import { Button } from '@material-ui/core';
import { SentencesContext } from '../../contexts/SentencesContext';
import { TokenContext } from '../../contexts/TokenContext';
import { useContext } from 'react';
const ButtonGroup = () => {
  const {
    sentence: [sentence, setSentence],
  } = useContext(SentencesContext);
  const {  showToken : [showToken, toggleShowToken]} = useContext(TokenContext);
  return (
    <div className='flex-row'>
      <Button
        size='large'
        style={{ marginTop: '10px', marginRight: '10px' }}
        variant='contained'
        color='primary'
        onClick={()=>{
          setSentence('');
          toggleShowToken(false);
      }}
      >
        Reset All
      </Button>

      <Button
        size='large'
        style={{ marginTop: '10px', marginRight: '10px' }}
        variant='contained'
        color='primary'
      >
        Reset Morphology
      </Button>
      <Button
        size='large'
        style={{ marginTop: '10px', marginRight: '10px' }}
        variant='contained'
        color='primary'
      >
        Save and Next
      </Button>
    </div>
  );
};

export default ButtonGroup;
