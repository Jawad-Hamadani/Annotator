// MIT License
//
// Copyright 2021 Mohammad Jawad Moshati Hamadani
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
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
