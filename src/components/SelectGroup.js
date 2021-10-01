import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const SelectGroup = ({
  options,
  id,
  label,
  variant,
  disabled,
  autoWidth,
  formWidth,
  spacing,
  styleT,
  formSize,
  setter,
}) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(spacing),
      minWidth: formWidth,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [currentValue, setCurrentValue] = useState(options[0]);

  const handleChange = (event) => {
    setCurrentValue(event.target.value);
  };
  const mainForm = classes.formControl;
  return (
    <div>
      <FormControl size={formSize} className={classes.formControl}>
        <InputLabel shrink>{label}</InputLabel>
        <Select
          style={styleT}
          value={currentValue}
          onChange={handleChange}
          labelId='select-demo'
          id={id}
          variant={variant}
          disabled={disabled}
          autoWidth={autoWidth}
        >
          {options.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectGroup;
