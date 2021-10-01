import { TextField } from '@material-ui/core';
import SelectGroup from '../SelectGroup';

const Morphology = ({value}) => {
  const borderRaduis = { borderRadius: '0' };
  return (
      <div style={{width:"100%"}}>
        <TextField
          className='TextField-without-border-radius'
          style={{marginBottom:'0.5em'}}
          dir='rtl'
          size='small'
          id='outlined-basic'
          variant='outlined'
          fullWidth
          value={value}
        />
         <SelectGroup
          styleT={borderRaduis}
          formSize='small'
          options={['', '']}
          variant='outlined'
          disabled
          formWidth='100%'
        />
      </div>
  );
};

export default Morphology;
