import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { useStyles } from "./InputTextField.style";
import { IInputTextField } from "./InputTextField.types";
import { useTranslationContext } from "../../../models/translationsContext/translationsContext";

const InputTextField = ({
  placeholder,
  size,
  className,
  value,
  type = "text",
  validation,
  valid,
  title,
  width,
  onBlur,
  onChange,
}: IInputTextField) => {
  const classes = useStyles();
  const { translate } = useTranslationContext();
  const translations = translate("inputField");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [spanShowWidth, setSpanShowWidth] = useState<number | null>(null);
  const [checkVisible, setCheckVisible] = useState(false);

  const spanShowRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.addEventListener("focusout", () => {
      setCheckVisible(true);
    });

    return () => {
      inputRef.current?.removeEventListener("focusout", () => {
        setCheckVisible(true);
      });
    };
  }, []);
  useEffect(() => {
    inputRef.current?.addEventListener("focusin", () => {
      setCheckVisible(false);
    });

    return () => {
      inputRef.current?.removeEventListener("focusin", () => {
        setCheckVisible(false);
      });
    };
  }, []);

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

  const [showToolTip, setShowToolTip] = useState(false);

  useEffect(() => {
    if (!valid && checkVisible) {
      setShowToolTip(true);
      window.setTimeout(() => setShowToolTip(false), 2000);
    }
  }, [valid, checkVisible]);

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
          onBlur={onBlur}
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
          ref={inputRef}
        />
        {validation && (
          <span
            className={`${classes.checkInput} ${
              (!checkVisible || !value) && classes.checkInputHidden
            }`}
            style={{
              right: `${
                value && type === "password" && `calc(${spanShowWidth}px + 4px)`
              }`,
            }}
          >
            {valid ? (
              <CheckCircleOutlineIcon color={"success"} />
            ) : (
              <span className={classes.toolTipBox}>
                <HighlightOffIcon color={"error"} />
                <span
                  className={`${classes.toolTip} ${
                    showToolTip && classes.toolTipDisplay
                  }`}
                  style={{ width: `${width}px` }}
                >
                  {title}
                </span>
                <span
                  className={`${classes.triangle} ${
                    showToolTip && classes.toolTipDisplay
                  }`}
                ></span>
              </span>
            )}
          </span>
        )}
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
