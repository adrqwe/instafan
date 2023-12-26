import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useStyles } from "./Select.style";
import { ISelectProps } from "./Select.types";

const Select = ({
  selectedVisibleValue,
  ariaLabel,
  defaultValue,
  selectKeys,
  fullObject,
  localStorageName,
}: ISelectProps) => {
  const classes = useStyles();

  return (
    <span className={classes.selectBox}>
      {selectedVisibleValue}
      <KeyboardArrowDownIcon className={classes.arrowIcon} />
      <select
        onChange={(e) => {
          localStorage.setItem(localStorageName, e.target.value);
          window.location.reload();
        }}
        aria-label={ariaLabel}
        className={classes.languageSelect}
        defaultValue={defaultValue}
      >
        {selectKeys.map((key: string, index: number) => {
          return (
            <option key={index} value={key}>
              {fullObject[key]}
            </option>
          );
        })}
      </select>
    </span>
  );
};

export default Select;
