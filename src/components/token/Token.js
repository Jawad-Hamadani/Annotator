import { Paper } from '@material-ui/core';
import Morphology from './Morphology';
import InputSelectValidated from './InputSelectValidatedToken';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: '0',
  },
});
const temp ="مراحب";
const Token = () => {
  const classes = useStyles();
  const word=[`${temp}`];
  return (
    <div>
      <Paper className={classes.root} variant='outlined' id='work-space'>
        {' '}
        <div className='flex-morphology'>
        {word.map((item, i)=>(
         <Morphology value={item} key={i} />
        ))}
        </div>
        <InputSelectValidated />
      </Paper>
    </div>
  );
};

export default Token;
