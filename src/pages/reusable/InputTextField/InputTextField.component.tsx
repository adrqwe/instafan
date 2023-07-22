import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { useStyles } from "./InputTextField.style";
import { IInputTextField } from "./InputTextField.types";
import { useTranslationContext } from "../../../models/translationsContext/translationsContext";

const InputTextField = ({
  placeholder,
  size,
  className,
  value,
  type = "text",
  onChange,
}: IInputTextField) => {
  const classes = useStyles();
  const { translate } = useTranslationContext();
  const translations = translate("inputField");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [spanShowWidth, setSpanShowWidth] = useState<number | null>(null);

  const spanShowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanShowRef.current) {
      setSpanShowWidth(spanShowRef.current?.offsetWidth);
    }
  }, [spanShowRef, passwordVisible]);

  const sizeOfInput = {
    small: {
      boxClass: classes.boxInputSmall,
      placeholderClass: classes.placeholderSmall,
    },
    medium: {
      boxClass: classes.boxInputMedium,
      placeholderClass: classes.placeholderMedium,
    },
    large: {
      boxClass: classes.boxInputLarge,
      placeholderClass: classes.placeholderLarge,
    },
  };

  return (
    <Box
      className={`${classes.boxInput} ${className} ${
        value
          ? `${classes.boxWithPlaceHolderAndInput} ${
              size && sizeOfInput[size].placeholderClass
            }`
          : classes.boxWithOnlyPlaceHolder
      } ${size && sizeOfInput[size].boxClass}`}
    >
      {placeholder && (
        <span
          className={`${classes.placeholder} ${classes.noSelect} ${
            value
              ? classes.placeholderAnimation
              : classes.placeholderAnimationRevers
          }`}
          style={{ position: `${value ? "static" : "absolute"}` }}
        >
          {placeholder}
        </span>
      )}
      <>
        <input
          type={passwordVisible ? "text" : type}
          className={`${classes.input} ${value && classes.scal}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: `${
              type === "password"
                ? `calc(100% - ${spanShowWidth}px - 4px)`
                : "100%"
            }`,
          }}
        />
        {type === "password" && (
          <span
            className={`${classes.showButton} ${classes.noSelect}`}
            style={{ zIndex: `${value ? 0 : -1}` }}
            ref={spanShowRef}
            onClick={() => {
              setPasswordVisible(!passwordVisible);
            }}
          >
            {passwordVisible ? translations.hide : translations.show}
          </span>
        )}
      </>
    </Box>
  );
};

export default InputTextField;
