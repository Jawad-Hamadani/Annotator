import { Button } from '@material-ui/core';

const ButtonGroup = () => {
  return (
    <div className='flex-row'>
      <Button
        size='large'
        style={{ marginTop: '10px', marginRight: '10px' }}
        variant='contained'
        color='primary'
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
