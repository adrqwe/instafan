import { FormControl, MenuItem, Select as SelectMUI } from "@mui/material";

import { useStyles } from "./Select.style";
import { ISelect } from "./Select.types";

const Select = ({ options, value, onChange }: ISelect) => {
  const classes = useStyles();

  return (
    <FormControl sx={{ m: 1, minWidth: 30 }} size="small">
      <SelectMUI
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={classes.select}
      >
        {Object.entries(options).map((option: [string, unknown], index) => (
          <MenuItem key={index} value={option[0]} className={classes.menuItem}>
            {option[1] as string}
          </MenuItem>
        ))}
      </SelectMUI>
    </FormControl>
  );
};

export default Select;
