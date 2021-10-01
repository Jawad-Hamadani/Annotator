import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const SearchBar = ({ button, label }) => {
  return (
    <div>
      <TextField id='outlined-basic' label={label} variant='outlined' />
      <Button
        size='large'
        style={{ marginTop: '10px' }}
        variant='contained'
        color='primary'
      >
        {button}
      </Button>
    </div>
  );
};

export default SearchBar;
