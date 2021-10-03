import { useContext } from 'react';
import SelectGroup from '../utilities/SelectGroup';
import { TextField } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { TokenContext } from '../../contexts/TokenContext';

const InputSelectValidated = () => {
  const {wordDisplay : [wordDisplay, setWordDisplay] }=useContext(TokenContext);
  return (
    <div className='grid-4'>
      <div>
        <TextField
          className='TextField-without-border-radius'
          dir='rtl'
          size='small'
          id='outlined-basic'
          variant='outlined'
          value={wordDisplay}
        />
      </div>
      <div>
        <TextField
          className='TextField-without-border-radius'
          dir='rtl'
          size='small'
          id='outlined-basic'
          variant='outlined'
        />
      </div>
      <div>
        <TextField
          className='TextField-without-border-radius'
          size='small'
          id='outlined-basic'
          variant='outlined'
          fullWidth
        />
      </div>
      <SelectGroup
        styleT={{ borderRadius: '0' }}
        formSize='small'
        variant='outlined'
        disabled
        formWidth='100%'
        options={['', '']}
      />
      <div>
        <FormGroup style={{ width: '100%' }}>
          <FormControlLabel
            control={<Checkbox size='small' color='primary' />}
            label={<span style={{ fontSize: '.8em' }}>Validated</span>}
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default InputSelectValidated;
