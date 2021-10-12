import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect, useContext } from "react";

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
  value,
  onChange,
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
  const [currentValue, setCurrentValue] = useState(value ?? options[0]);

  useEffect(() => {
    if (onChange) {
      onChange(currentValue);
    }
  }, [currentValue]);

  const handleChange = (e) => {
    setCurrentValue(e.target.value);
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
          labelId="select-demo"
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
